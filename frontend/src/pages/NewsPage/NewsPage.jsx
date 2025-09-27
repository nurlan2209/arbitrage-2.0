import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  ServerCrash,
  Loader,
} from "lucide-react";
import { truncateText, formatDate } from "../../utils/helpers";
import Modal from "../../components/UI/Modal";

const NewsPage = () => {
  const { t } = useLanguage();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_BASE_URL = "https://arbitrage-rk.kz"; // Адрес вашего бэкенда
  const NEWS_PER_PAGE = 9;

  const fetchNews = async (pageNum) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/get_news.php?skip=${
          pageNum * NEWS_PER_PAGE
        }&limit=${NEWS_PER_PAGE}`
      );
      if (!response.ok) {
        throw new Error("Не удалось загрузить новости. Сервер недоступен.");
      }
      const data = await response.json();

      if (data.news.length === 0) {
        // <-- ИЗМЕНЕНИЕ ЗДЕСЬ
        setHasMore(false);
      } else {
        // И ИЗМЕНЕНИЕ ЗДЕСЬ (два раза) ↓
        setNews((prevNews) =>
          pageNum === 0 ? data.news : [...prevNews, ...data.news]
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(0);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  const handleOpenModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <>
      <div className="pt-32 bg-gradient-to-b from-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-900 rounded-lg">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
                {t("news_title")}
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("news_p1")}
            </p>
          </div>

          {/* Content Area */}
          <div className="max-w-7xl mx-auto">
            {isLoading && news.length === 0 && (
              <div className="flex justify-center items-center py-16">
                <Loader className="w-12 h-12 text-blue-900 animate-spin" />
              </div>
            )}

            {error && (
              <div className="text-center py-16 text-red-600 bg-red-50 rounded-lg">
                <ServerCrash className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ошибка загрузки</h3>
                <p>{error}</p>
              </div>
            )}

            {!isLoading && !error && news.length === 0 && (
              <div className="text-center py-16 text-gray-600 bg-gray-50 rounded-lg">
                <Newspaper className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Новостей пока нет</h3>
                <p>Здесь будут появляться статьи по мере их публикации.</p>
              </div>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-500">
                        {formatDate(item.publication_date)}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {truncateText(item.full_text, 200)}
                    </p>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-900 font-medium transition-colors group"
                    >
                      <span>Читать далее</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && !error && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 animate-spin" />
                  ) : (
                    "Загрузить больше новостей"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Window */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedNews?.title}
        size="lg"
      >
        {selectedNews && (
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-gray-500 mb-4 border-b pb-2">
              <Calendar className="w-4 h-4 inline-block mr-2" />
              {formatDate(selectedNews.publication_date)}
            </div>
            {/* Используем dangerouslySetInnerHTML или Markdown-парсер для форматирования */}
            <div
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{
                __html: selectedNews.full_text.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default NewsPage;
