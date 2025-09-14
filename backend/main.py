import os
import re
import logging
from datetime import datetime
from typing import List

import uvicorn
from fastapi import FastAPI, Depends, HTTPException, Query, Security
from fastapi.security import APIKeyHeader
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Text, DateTime, select
from sqlalchemy.orm import sessionmaker, Session, declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

# --- Admin ---
from sqladmin import Admin, ModelView

# --- Telegram ---
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# --- Логирование ---
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

# --- Конфигурация ---
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "YOUR_TELEGRAM_BOT_TOKEN")
TELEGRAM_ADMIN_ID = int(os.getenv("TELEGRAM_ADMIN_ID", "0"))
BOT_API_KEY = os.getenv("BOT_API_KEY", "your-secret-api-key")

API_KEY_NAME = "X-API-KEY"
api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)

# --- База данных ---
DATABASE_URL = "sqlite+aiosqlite:///./news.db"

async_engine = create_async_engine(DATABASE_URL, echo=True)
async_session_maker = async_sessionmaker(async_engine, expire_on_commit=False)

Base = declarative_base()


class News(Base):
    __tablename__ = "news"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), index=True)
    full_text = Column(Text)
    publication_date = Column(DateTime, default=datetime.utcnow)

    def __str__(self):
        return self.title


# --- Pydantic схемы ---
class NewsSchema(BaseModel):
    id: int
    title: str
    full_text: str
    publication_date: datetime

    class Config:
        orm_mode = True


class NewsCreateSchema(BaseModel):
    title: str
    full_text: str


# --- Admin Views ---
class NewsAdmin(ModelView, model=News):
    column_list = [News.id, News.title, News.publication_date]
    column_labels = {
        News.id: "ID",
        News.title: "Заголовок",
        News.full_text: "Полный текст",
        News.publication_date: "Дата публикации",
    }
    name = "Новость"
    name_plural = "Новости"


# --- FastAPI ---
app = FastAPI(
    title="Arbitrage Center API",
    description="API для управления новостями, админкой и Telegram-ботом.",
    version="2.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Admin ---
admin = Admin(app, async_engine)
admin.add_view(NewsAdmin)

# --- Telegram Bot ---
telegram_app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()


# --- Авторизация API ---
async def get_api_key(api_key: str = Security(api_key_header)):
    if api_key == BOT_API_KEY:
        return api_key
    raise HTTPException(status_code=403, detail="Could not validate credentials")


# --- Startup ---
@app.on_event("startup")
async def on_startup():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    if TELEGRAM_BOT_TOKEN != "YOUR_TELEGRAM_BOT_TOKEN":
        await telegram_app.initialize()
        await telegram_app.start()
        await telegram_app.updater.start_polling()
        logger.info("Telegram Bot started...")


@app.on_event("shutdown")
async def on_shutdown():
    if telegram_app.updater and telegram_app.updater.is_running:
        await telegram_app.updater.stop()
        await telegram_app.stop()
        await telegram_app.shutdown()
        logger.info("Telegram Bot stopped.")


# --- Синхронная сессия для API ---
sync_engine = async_engine.sync_engine
SessionLocal = sessionmaker(bind=sync_engine)


async def get_db_session() -> AsyncSession:
    async with async_session_maker() as session:
        yield session


# --- API ---
@app.get("/api/news", response_model=List[NewsSchema], tags=["Новости"])
async def get_news_list(
    skip: int = Query(0, ge=0),
    limit: int = Query(9, ge=1, le=100),
    db: AsyncSession = Depends(get_db_session),
):
    result = await db.execute(
        select(News)
        .order_by(News.publication_date.desc())
        .offset(skip)
        .limit(limit)
    )
    news = result.scalars().all()
    return news


@app.post("/api/news/telegram", response_model=NewsSchema, tags=["Телеграм Бот"])
async def create_news_from_bot(
    news_data: NewsCreateSchema,
    api_key: str = Depends(get_api_key),
    db: AsyncSession = Depends(get_db_session),
):
    new_article = News(title=news_data.title, full_text=news_data.full_text)
    db.add(new_article)
    await db.commit()
    await db.refresh(new_article)
    return new_article


@app.get("/", tags=["Root"])
def read_root():
    return {"message": "API is running"}


# --- Telegram Bot Handlers ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    if user.id != TELEGRAM_ADMIN_ID:
        await update.message.reply_text("⛔️ У вас нет доступа к этому боту.")
        return

    await update.message.reply_html(
        "Здравствуйте! Я бот для публикации новостей.\n\n"
        "Пришлите сообщение в формате:\n\n"
        "<code>[ЗАГОЛОВОК]</code>\n"
        "Текст заголовка\n\n"
        "<code>[ПОЛНЫЙ ТЕКСТ]</code>\n"
        "Полный текст статьи..."
    )


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    if user.id != TELEGRAM_ADMIN_ID:
        return

    text = update.message.text
    title_match = re.search(
        r"\[ЗАГОЛОВОК\]\s*\n(.*?)\n\n\[ПОЛНЫЙ ТЕКСТ\]", text, re.DOTALL | re.IGNORECASE
    )
    full_text_match = re.search(
        r"\[ПОЛНЫЙ ТЕКСТ\]\s*\n(.*)", text, re.DOTALL | re.IGNORECASE
    )

    if not title_match or not full_text_match:
        await update.message.reply_text(
            "❌ Неверный формат. Используйте шаблон:\n"
            "[ЗАГОЛОВОК]\n...\n\n[ПОЛНЫЙ ТЕКСТ]\n..."
        )
        return

    title = title_match.group(1).strip()
    full_text = full_text_match.group(1).strip()

    try:
        import httpx

        base_url = "http://127.0.0.1:8000"
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{base_url}/api/news/telegram",
                json={"title": title, "full_text": full_text},
                headers={API_KEY_NAME: BOT_API_KEY},
            )
            if response.status_code == 200:
                await update.message.reply_text("✅ Статья успешно опубликована!")
            else:
                await update.message.reply_text(
                    f"❗️ Ошибка публикации: {response.text}"
                )
    except Exception as e:
        await update.message.reply_text(f"🔥 Критическая ошибка: {e}")


telegram_app.add_handler(CommandHandler("start", start))
telegram_app.add_handler(
    MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message)
)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
