import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FileText, Download, Eye } from "lucide-react";

const SborahiPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Симуляция загрузки PDF
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    // Скачивание PDF из папки public/documents/
    const link = document.createElement("a");
    link.href = "/documents/polozhenie-o-sborah.pdf";
    link.download = "Положение_о_сборах.pdf";
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
                  {t("sborahi_title")}
                </h1>
                <p className="text-gray-600 mt-1">{t("sborahi_subtitle")}</p>
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
              style={{ height: "800px" }}
            >
              <iframe
                src="/documents/polozhenie-o-sborah.pdf"
                width="100%"
                height="100%"
                title={t("sborahi_title")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t("sborahi_info_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">{t("field_name")}:</strong>
                  <br />
                  {t("sborahi_info_name")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_status")}:
                  </strong>
                  <br />
                  {t("sborahi_info_status")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_format")}:
                  </strong>
                  <br />
                  {t("sborahi_info_format")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_language")}:
                  </strong>
                  <br />
                  {t("sborahi_info_language")}
                </div>
              </div>
            </div>

            {/* Key Information Blocks */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("sborahi_section1_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("sborahi_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("sborahi_section2_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("sborahi_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("sborahi_section3_title")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t("sborahi_section3_desc")}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {t("sborahi_contact_title")}
              </h3>
              <p className="mb-4">{t("sborahi_contact_desc")}</p>
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

export default SborahiPage;
