import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Working Hours Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-white border-opacity-30 pb-2 flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{t("working_hours")}</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white border-opacity-10">
                <span className="font-semibold">{t("weekdays")}</span>
                <span className="text-blue-200 font-medium">
                  {t("work_time")}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold">{t("weekend")}</span>
                <span className="text-red-300 italic">{t("weekend_text")}</span>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-white border-opacity-30 pb-2 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>{t("contact_info")}</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                <div className="text-sm leading-relaxed">
                  г. Астана, Проспект Туран, дом 83/1, офис 122
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+77073293969"
                    className="block text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    +7 (707) 329-39-69
                  </a>
                  <a
                    href="tel:+77015588033"
                    className="block text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    +7 (701) 558-80-33
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                <a
                  href="mailto:arbitragerk.kz@gmail.com"
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  arbitragerk.kz@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-white border-opacity-30 pb-2 flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{t("location")}</span>
            </h3>
            <div className="h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Карта расположения офиса"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d71.3864250000000!3d51.0849280000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA1JzA1LjciTiA3McKwMjMnMTEuMSJF!5e0!3m2!1sen!2skz!4v1620000000000!5m2!1sen!2skz"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 pt-6 text-center">
          <p className="text-white text-opacity-80 text-sm">
            {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
