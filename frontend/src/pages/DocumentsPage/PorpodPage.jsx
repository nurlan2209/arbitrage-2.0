import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  FileText,
  Download,
  Eye,
  ListChecks,
  Mail,
  FilePlus,
  FileX,
} from "lucide-react";

const PorpodPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/porpod.pdf";
    link.download = "Порядок_подачи_исковых_заявлений.pdf";
    link.click();
  };

  const benefits = [
    {
      icon: ListChecks,
      title: t("porpod_benefit1_title"),
      description: t("porpod_benefit1_desc"),
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Mail,
      title: t("porpod_benefit2_title"),
      description: t("porpod_benefit2_desc"),
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: FilePlus,
      title: t("porpod_benefit3_title"),
      description: t("porpod_benefit3_desc"),
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: FileX,
      title: t("porpod_benefit4_title"),
      description: t("porpod_benefit4_desc"),
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="pt-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-900 rounded-lg">
                <FilePlus className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {t("porpod_title")}
                </h1>
                <p className="text-gray-600 mt-1">{t("porpod_subtitle")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center"
              >
                <div
                  className={`p-3 ${benefit.bg} rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
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

            <div
              className="w-full border border-gray-200 rounded-lg overflow-hidden"
              style={{ height: "800px" }}
            >
              <iframe
                src="/documents/porpod.pdf"
                width="100%"
                height="100%"
                title={t("porpod_title")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t("porpod_info_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">{t("field_name")}:</strong>
                  <br />
                  {t("porpod_info_name")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_status")}:
                  </strong>
                  <br />
                  {t("porpod_info_status")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_format")}:
                  </strong>
                  <br />
                  {t("field_format_value")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("porpod_info_purpose_title")}:
                  </strong>
                  <br />
                  {t("porpod_info_purpose_desc")}
                </div>
              </div>
            </div>

            {/* Key Sections based on PDF */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("porpod_section1_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("porpod_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("porpod_section2_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("porpod_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <ListChecks className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("porpod_section3_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("porpod_section3_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <FileX className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("porpod_section4_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("porpod_section4_desc")}
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                {t("document_consultation_needed")}
              </h3>
              <p className="text-blue-100">{t("document_consultation_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorpodPage;
