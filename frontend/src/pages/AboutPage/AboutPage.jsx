import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Users, Target, Award, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t("about_team_title"),
      description: t("about_team_desc"),
    },
    {
      icon: Target,
      title: t("about_solutions_title"),
      description: t("about_solutions_desc"),
    },
    {
      icon: Award,
      title: t("about_recognition_title"),
      description: t("about_recognition_desc"),
    },
    {
      icon: CheckCircle,
      title: t("about_reliability_title"),
      description: t("about_reliability_desc"),
    },
  ];

  return (
    <div className="pt-32 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-900 rounded-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
              {t("about_title")}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden mb-12">
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  {t("about_intro")}
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>{t("about_p1")}</p>
                  <p>{t("about_p2")}</p>
                  <p>{t("about_p3")}</p>
                  <p>{t("about_p4")}</p>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
                  {t("about_general_info")}
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{t("about_p5")}</p>
                  <p>{t("about_p6")}</p>
                  <p>{t("about_p7")}</p>
                  <p>{t("about_p8")}</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {t("about_mission_title")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t("about_mission_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                {t("about_why_choose_title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    5
                  </div>
                  <p className="text-blue-100">{t("about_years_experience")}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    500+
                  </div>
                  <p className="text-blue-100">{t("about_successful_cases")}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    99%
                  </div>
                  <p className="text-blue-100">
                    {t("about_satisfied_clients")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
