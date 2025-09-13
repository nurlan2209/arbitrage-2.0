import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FileText, Download, Eye, ZoomIn, ZoomOut } from "lucide-react";

const ReglamentPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [pdfScale, setPdfScale] = useState(1.0);

  // Симуляция загрузки PDF
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleZoomIn = () => {
    setPdfScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setPdfScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleDownload = () => {
    // Создаем PDF blob из base64 данных
    const pdfData =
      "JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUgODQyXQovQ29udGVudHMgNCAwIFIKL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNSAwIFIKPj4KPj4KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCAyMDAKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgo1MCA3MDAgVGQKKNCgNkdMQU1FTlQgQVJCSVRSQVpIQSkgVGoKMCAtMjAgVGQKKNCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGG0LXQvdGC0YAgQXJiaXRyYWdlKSBUagowIC0yMCBUZAoo0JDRgNCx0LjRgtGA0LDQttC90YvRhSDRgNC10YjQtdC90LjQuSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExOSAwMDAwMCBuIAowMDAwMDAwMjQ2IDAwMDAwIG4gCjAwMDAwMDA0OTYgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo1OTMKJSVFT0Y=";

    try {
      // Конвертируем base64 в blob
      const byteCharacters = atob(pdfData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });

      // Создаем URL для скачивания
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Регламент_Арбитража.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании PDF:", error);
      alert("Произошла ошибка при скачивании файла");
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
                  {t("nav_reglament")}
                </h1>
                <p className="text-gray-600 mt-1">
                  Правила арбитражного разбирательства
                </p>
              </div>
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
                src="/documents/reglament.pdf"
                width="100%"
                height="100%"
                title={t("nav_reglament")}
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
                  Регламент Арбитража г. Астана
                </div>
                <div>
                  <strong className="text-blue-800">Версия:</strong>
                  <br />
                  Изменения от 14.02.2019г.
                </div>
                <div>
                  <strong className="text-blue-800">Формат:</strong>
                  <br />
                  PDF документ, 17 страниц
                </div>
                <div>
                  <strong className="text-blue-800">Язык:</strong>
                  <br />
                  Русский
                </div>
              </div>
            </div>

            {/* Key Sections */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section1_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section2_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section3_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section3_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section4_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section4_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section5_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section5_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("reglament_section6_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("reglament_section6_desc")}
                </p>
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

export default ReglamentPage;
