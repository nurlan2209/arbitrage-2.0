import React, { useState } from "react";
// Исправлен путь к контексту
import { useLanguage } from "../../context/LanguageContext";
import { FileText, Download, Eye, ZoomIn, ZoomOut } from "lucide-react";

const ArbitrazhSoglasheniePage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [pdfScale, setPdfScale] = useState(1.0);

  // Константы для этого документа
  const PDF_PATH = "/documents/Arbitrazhnoe_soglashenie.pdf";
  const DOWNLOAD_NAME = "Arbitrazhnoe_soglashenie.pdf";

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleZoomIn = () => {
    setPdfScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setPdfScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(PDF_PATH);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = DOWNLOAD_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании PDF:", error);
      console.error("Произошла ошибка при скачивании файла.");
    }
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
                  {t("nav_arbitrazh_sogl")}
                </h1>
                <p className="text-gray-600 mt-1">
                  Официальный образец арбитражного соглашения
                </p>
              </div>
            </div>
            {/* Кнопки управления */}
            <div className="flex space-x-3">
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <Download className="w-5 h-5" />
                <span>{t("document_download")}</span>
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                disabled={pdfScale >= 2.0}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                disabled={pdfScale <= 0.5}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
            </div>
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
              style={{
                height: "800px",
                transform: `scale(${pdfScale})`,
                transformOrigin: "top center",
              }}
            >
              <iframe
                src={PDF_PATH}
                width="100%"
                height="100%"
                title={t("nav_arbitrazh_sogl")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Alternative Content for browsers that don't support PDF */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Информация о документе
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">Название:</strong>
                  <br />
                  Арбитражное соглашение
                </div>
                <div>
                  <strong className="text-blue-800">Версия:</strong>
                  <br />
                  Актуальная на 2025 год
                </div>
                <div>
                  <strong className="text-blue-800">Формат:</strong>
                  <br />
                  PDF документ, 1 страница
                </div>
                <div>
                  <strong className="text-blue-800">Язык:</strong>
                  <br />
                  Русский/Казахский
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {t("document_consultation_needed")}
              </h3>
              <p className="mb-4">{t("document_consultation_desc")}</p>
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

export default ArbitrazhSoglasheniePage;
