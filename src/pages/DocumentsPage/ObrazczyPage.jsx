import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  CheckCircle,
  FileSignature,
  Users,
  Building,
} from "lucide-react";

const ObrazczyPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Симуляция загрузки PDF
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    // Скачивание PDF из папки public/documents/
    const link = document.createElement("a");
    link.href = "/documents/obrdocarb.pdf";
    link.download = "Образцы_документов_арбитражная_оговорка.pdf";
    link.click();
  };

  return (
    <div className="pt-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-900 rounded-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {t("obrazcy_title")}
                </h1>
                <p className="text-gray-600 mt-1">{t("obrazcy_subtitle")}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t("document_download")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-green-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Проверенные формулировки
            </h3>
            <p className="text-gray-600 text-sm">{t("obrazcy_benefit1")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileSignature className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Соответствие требованиям
            </h3>
            <p className="text-gray-600 text-sm">{t("obrazcy_benefit2")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-purple-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Экономия времени
            </h3>
            <p className="text-gray-600 text-sm">{t("obrazcy_benefit3")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-orange-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Снижение рисков
            </h3>
            <p className="text-gray-600 text-sm">{t("obrazcy_benefit4")}</p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-white rounded-lg shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {t("document_view")}
              </span>
            </div>
          </div>

          <div className="p-4">
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">{t("document_loading")}</p>
                </div>
              </div>
            )}

            {/* PDF Embed Container */}
            <div
              className="w-full border border-gray-200 rounded-lg overflow-hidden"
              style={{ height: "800px" }}
            >
              <iframe
                src="/documents/obrdocarb.pdf"
                width="100%"
                height="100%"
                title={t("obrazcy_title")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t("obrazcy_info_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">{t("field_name")}:</strong>
                  <br />
                  {t("obrazcy_info_name")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_status")}:
                  </strong>
                  <br />
                  {t("obrazcy_info_status")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_format")}:
                  </strong>
                  <br />
                  {t("obrazcy_info_format")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("obrazcy_info_purpose")}:
                  </strong>
                  <br />
                  Готовые шаблоны договоров с арбитражными оговорками
                </div>
              </div>
            </div>

            {/* Key Sections */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("obrazcy_section1_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("obrazcy_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <FileSignature className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("obrazcy_section2_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("obrazcy_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("obrazcy_section3_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("obrazcy_section3_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("obrazcy_section4_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("obrazcy_section4_desc")}
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Рекомендации по использованию
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Данные образцы документов являются рекомендательными и
                      должны быть адаптированы под конкретные условия вашего
                      бизнеса. Обязательно проконсультируйтесь с юристом перед
                      включением арбитражных оговорок в договоры.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("obrazcy_contact_title")}
                  </h3>
                  <p className="mb-4 text-blue-100">
                    {t("obrazcy_contact_desc")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+77073293969"
                      className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>+7 (707) 329-39-69</span>
                    </a>
                    <a
                      href="mailto:arbitragerk.kz@gmail.com"
                      className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>arbitragerk.kz@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      15+ готовых типов договоров с оговорками
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Проверенные формулировки для разных сфер
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Рекомендации по адаптации под ваш бизнес
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Консультации юристов по внедрению
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObrazczyPage;
