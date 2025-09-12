import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

const NewsPage = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      date: "15 января 2025",
      title: "Обновление регламента арбитражного суда",
      preview:
        "Введены новые правила проведения арбитражных разбирательств для повышения эффективности процесса.",
      category: "Регламент",
    },
    {
      id: 2,
      date: "10 января 2025",
      title: "Новые онлайн-сервисы для клиентов",
      preview:
        "Запущена платформа для подачи документов и отслеживания статуса дел в режиме онлайн.",
      category: "Технологии",
    },
    {
      id: 3,
      date: "5 января 2025",
      title: "Расширение штата арбитров",
      preview:
        "В состав центра вошли новые высококвалифицированные специалисты с международным опытом.",
      category: "Кадры",
    },
  ];

  return (
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

        {/* News Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.preview}
                  </p>

                  <button className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-900 font-medium transition-colors group">
                    <span>Читать далее</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg">
              Загрузить больше новостей
            </button>
          </div>

          {/* News Categories */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
              Категории новостей
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Регламент", "Технологии", "Кадры", "Мероприятия"].map(
                (category) => (
                  <button
                    key={category}
                    className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-900 font-medium transition-colors text-center"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
