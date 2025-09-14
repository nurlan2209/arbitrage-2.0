import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  FileText,
  Download,
  Eye,
  Users,
  Award,
  Scale,
  Phone,
} from "lucide-react";

const ReestrPage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Симуляция загрузки PDF
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    // Скачивание PDF из папки public/documents/
    const link = document.createElement("a");
    link.href = "/documents/reestr.pdf";
    link.download = "Реестр_арбитров.pdf";
    link.click();
  };

  // Статистика для реестра арбитров
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: t("reestr_stats_total"),
      color: "text-blue-600",
    },
    {
      icon: Scale,
      number: "35",
      label: t("reestr_stats_judges"),
      color: "text-green-600",
    },
    {
      icon: Award,
      number: "15+",
      label: t("reestr_stats_experience"),
      color: "text-purple-600",
    },
    {
      icon: FileText,
      number: "12",
      label: t("reestr_stats_specializations"),
      color: "text-orange-600",
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {t("reestr_title")}
                </h1>
                <p className="text-gray-600 mt-1">{t("reestr_subtitle")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all text-center"
              >
                <div
                  className={`p-3 bg-gray-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
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

            {/* PDF Embed Container */}
            <div
              className="w-full border border-gray-200 rounded-lg overflow-hidden"
              style={{ height: "800px" }}
            >
              <iframe
                src="/documents/reestr.pdf"
                width="100%"
                height="100%"
                title={t("reestr_title")}
                className="border-0"
                onLoad={handlePdfLoad}
              />
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t("reestr_info_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">{t("field_name")}:</strong>
                  <br />
                  {t("reestr_info_name")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_status")}:
                  </strong>
                  <br />
                  {t("reestr_info_status")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_format")}:
                  </strong>
                  <br />
                  {t("reestr_info_format")}
                </div>
                <div>
                  <strong className="text-blue-800">
                    {t("field_language")}:
                  </strong>
                  <br />
                  {t("reestr_info_language")}
                </div>
              </div>
            </div>

            {/* Key Sections */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("reestr_section1_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("reestr_section1_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("reestr_section2_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("reestr_section2_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("reestr_section3_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("reestr_section3_desc")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-gray-800">
                    {t("reestr_section4_title")}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t("reestr_section4_desc")}
                </p>
              </div>
            </div>

            {/* Additional Information Card */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t("reestr_contact_title")}
                  </h3>
                  <p className="mb-4 text-blue-100">
                    {t("reestr_contact_desc")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+77073293969"
                      className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
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

                {/* Benefits list */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Более 50 квалифицированных арбитров
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Опыт работы судьями в государственных судах
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Специализация по различным отраслям права
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-100 text-sm">
                      Помощь в подборе арбитра под ваш спор
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

export default ReestrPage;
