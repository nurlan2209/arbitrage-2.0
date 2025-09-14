import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  CheckCircle,
  Scale,
  FileSignature,
} from "lucide-react";

const SoglPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Симуляция загрузки PDF
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    // Скачивание PDF из папки public/documents/
    const link = document.createElement("a");
    link.href = "/documents/sogl2.pdf";
    link.download = "Типовое_соглашение.pdf";
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
                <FileSignature className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {t("sogl_title")}
                </h1>
                <p className="text-gray-600 mt-1">{t("sogl_subtitle")}</p>
              </div>
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
              Соответствие закону
            </h3>
            <p className="text-gray-600 text-sm">{t("sogl_benefit1")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-purple-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Scale className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Проверенная практика
            </h3>
            <p className="text-gray-600 text-sm">{t("sogl_benefit2")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Готовый шаблон
            </h3>
            <p className="text-gray-600 text-sm">{t("sogl_benefit3")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center">
            <div className="p-3 bg-orange-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileSignature className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Индивидуальная адаптация
            </h3>
            <p className="text-gray-600 text-sm">{t("sogl_benefit4")}</p>
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
                src="/documents/sogl2.pdf"
                width="100%"
                height="100%"
                title={t("sogl_title")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t("sogl_info_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">{t("field_name")}:</strong>
                  <br />
                  {t("sogl_info_name")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_status")}:
                  </strong>
                  <br />
                  {t("sogl_info_status")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_format")}:
                  </strong>
                  <br />
                  {t("sogl_info_format")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("sogl_info_purpose")}:
                  </strong>
                  <br />
                  Образец для составления арбитражных соглашений
                </div>
              </div>
            </div>

            {/* Key Sections */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("sogl_section1_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("sogl_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("sogl_section2_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("sogl_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("sogl_section3_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("sogl_section3_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <FileSignature className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("sogl_section4_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("sogl_section4_desc")}
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Важное уведомление
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Данное типовое соглашение является образцом и должно быть
                      адаптировано под конкретные обстоятельства вашего дела.
                      Рекомендуется получить юридическую консультацию перед
                      использованием.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {t("sogl_contact_title")}
              </h3>
              <p className="mb-4">{t("sogl_contact_desc")}</p>
              <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoglPage;
