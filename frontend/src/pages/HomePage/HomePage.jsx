import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Scale, Gavel, Phone } from "lucide-react";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-custom-header">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 26, 51, 0.85), rgba(0, 51, 102, 0.75)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {t("hero_title")}
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-blue-100 max-w-2xl">
                {t("hero_subtitle")}
              </p>
              <button className="inline-flex items-center space-x-2 bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
                <span>{t("hero_button_about")}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Chairman Card */}
            <div className="bg-white bg-opacity-95 text-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-900 rounded-lg">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-blue-900">
                  {t("hero_card1_title")}
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-blue-900">
                  Омаров Гани Калмырзаевич
                </p>

                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong>Опыт работы:</strong>
                    <br />
                    Арбитражный суд г. Астаны(заместитель председателя
                    арбитража)
                    <br />
                    2019 – 2025 • Вынесено более 800 000 арбитражных решений по
                    гражданским делам. • Составлено 155 медиативных соглашений.
                    • Участие в разрешении споров по гражданским, трудовым,
                    жилищным и иным делам.
                    <br />
                    <br />
                    Суд г. Астаны Секретарь судебного заседания <br />
                    2000 – 2002 • Подготовка и ведение протоколов заседаний. •
                    Оформление процессуальных документов.
                    <br />
                    <br />
                    Казахский аграрный университет им. С. Сейфуллина
                    Преподаватель дисциплины «Основы права»
                    <br />
                    2006 – 2009 • Преподавание гражданского, трудового,
                    уголовного, жилищного, административного и семейного права.
                    • Разработка учебных программ и методических материалов.
                    <br />
                    <br />
                    Сарыаркинский районный суд г. Астана Главный специалист
                    <br />
                    2004 – 2006 • Обеспечение документооборота и сопровождение
                    судебного процесса. • Работа с судебными решениями и
                    материалами дел.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900">
                      Справки и онлайн-арбитражные разбирательства:
                    </span>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+77073293969"
                      className="block text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      +7 (707) 329-39-69
                    </a>
                    <a
                      href="tel:+77015588033"
                      className="block text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      +7 (701) 558-80-33
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-900 rounded-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
                  {t("main_welcome")}
                </h1>
              </div>
            </div>

            {/* Main Information Block */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-blue-100 mb-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                  <p className="text-lg font-semibold text-blue-900 leading-relaxed">
                    <strong>{t("main_law_text")}</strong>
                  </p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_arbiters")}</strong>
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_cases")}</strong> {t("main_cases_list")}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_consent")}</strong>{" "}
                      {t("main_consent_text")}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_location")}</strong>{" "}
                      {t("main_location_text")}
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="leading-relaxed text-yellow-800">
                        <strong>{t("main_fee")}</strong> {t("main_fee_text")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_decision")}</strong>{" "}
                      {t("main_decision_text")}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      <strong>{t("main_timeframe")}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
                <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Scale className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Арбитражные решения
                </h3>
                <p className="text-gray-600 text-sm">
                  Профессиональное разрешение споров
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
                <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Gavel className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Консультации
                </h3>
                <p className="text-gray-600 text-sm">
                  Экспертная юридическая помощь
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
                <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Онлайн поддержка
                </h3>
                <p className="text-gray-600 text-sm">
                  Круглосуточная техническая поддержка
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
