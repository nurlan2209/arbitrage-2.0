import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Scale, Gavel, Phone, FileText, X } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isSmallScreen = window.innerWidth < 768;
      const isTouchDevice =
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      setIsMobile(isSmallScreen || isTouchDevice);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const documents = [
    {
      name: "Арбитражное соглашение",
      path: "/documents/Arbitrazhnoe_soglashenie.pdf",
    },
    {
      name: "Расписка",
      path: "/documents/Raspiska.pdf",
    },
    {
      name: "Универсальная арбитражная оговорка",
      path: "/documents/Universalnaya_ogovorka.pdf",
    },
  ];

  const handleDocClick = (doc) => {
    if (isMobile) {
      window.open(doc.path, "_blank");
      setSelectedDoc(null);
    } else {
      setSelectedDoc(doc);
    }
  };

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
                {t("hero_subtitle")} <br />
                {/* {t("hero_slogan")} */}
              </p>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setSelectedDoc(selectedDoc ? null : "list")}
                  className="inline-flex items-center space-x-2 bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>{t("hero_button_about")}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setCurrentPage("reestr")}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>{t("hero_button_reestr")}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setCurrentPage("legislation")}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Законодательство об арбитраже РК</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* БЛОК, КОТОРЫЙ ПОЯВЛЯЕТСЯ ПОСЛЕ НАЖАТИЯ */}
                {selectedDoc === "list" && (
                  <div className="flex flex-col space-y-3 transition-all duration-300">
                    {/* ======================================================= */}
                    {/* ============== ВОТ ВАШ ТЕКСТОВЫЙ БЛОК ============== */}
                    {/* ======================================================= */}
                    <div className="bg-white text-blue-800 p-4 rounded-lg shadow text-left text-sm">
                      <p>
                        <strong>Арбитраж МЦАР</strong> — это форма разрешения
                        споров между сторонами вне государственных судов,
                        основанная на добровольном согласии участников, при этом
                        решения арбитража могут иметь ту же юридическую силу,
                        что и судебные.
                      </p>
                    </div>
                    {/* ======================================================= */}
                    {/* ======================================================= */}

                    {/* А ВОТ 3 КНОПКИ С ДОКУМЕНТАМИ */}
                    {documents.map((doc) => (
                      <button
                        key={doc.name}
                        onClick={() => handleDocClick(doc)}
                        className="flex items-center justify-center space-x-2 bg-white text-blue-900 py-3 rounded-lg shadow hover:bg-blue-50 transition"
                      >
                        <FileText className="w-5 h-5" />
                        <span>{doc.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
                    <strong>Арбитражный суд г. Астаны</strong> (заместитель
                    председателя арбитража)
                    <br />
                    <em>2019 – 2025</em>
                    <br />
                    • Вынесено более 800 арбитражных решений по гражданским
                    делам.
                    <br />
                    • Составлено 155 медиативных соглашений.
                    <br />
                    • Участие в разрешении споров по гражданским, трудовым,
                    жилищным и иным делам.
                    <br />
                    <strong>Суд г. Астаны</strong> — Секретарь судебного
                    заседания
                    <br />
                    <em>2000 – 2002</em>
                    <br />
                    • Подготовка и ведение протоколов заседаний.
                    <br />
                    • Оформление процессуальных документов.
                    <br />
                    <strong>Сарыаркинский районный суд г. Астана</strong> —
                    Главный специалист
                    <br />
                    <em>2004 – 2006</em>
                    <br />
                    • Обеспечение документооборота и сопровождение судебного
                    процесса.
                    <br />
                    • Работа с судебными решениями и материалами дел.
                    <br />
                    <strong>
                      Казахский аграрный университет им. С. Сейфуллина
                    </strong>{" "}
                    — Преподаватель дисциплины «Основы права»
                    <br />
                    <em>2006 – 2009</em>
                    <br />
                    • Преподавание гражданского, трудового, уголовного,
                    жилищного, административного и семейного права.
                    <br />• Разработка учебных программ и методических
                    материалов.
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

      {/* PDF Viewer */}
      {selectedDoc && selectedDoc !== "list" && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="relative w-11/12 h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedDoc("list")}
              className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={selectedDoc.path}
              title={selectedDoc.name}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
