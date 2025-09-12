import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-900 rounded-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
              {t("contact_title")}
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center space-x-2">
                  <MapPin className="w-6 h-6" />
                  <span>Наши контакты</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        Адрес
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("contact_address").replace("Наш адрес: ", "")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Телефоны
                      </h3>
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

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:arbitragerk.kz@gmail.com"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        arbitragerk.kz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Режим работы
                      </h3>
                      <div className="space-y-1 text-gray-600">
                        <div className="flex justify-between">
                          <span>{t("weekdays")}</span>
                          <span>{t("work_time")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("weekend")}</span>
                          <span className="text-red-500">
                            {t("weekend_text")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Местоположение</span>
                  </h3>
                </div>
                <div className="h-64">
                  <iframe
                    title="Интерактивная карта офиса"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d71.3864250000000!3d51.0849280000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA1JzA1LjciTiA3McKwMjMnMTEuMSJF!5e0!3m2!1sen!2skz!4v1620000000000!5m2!1sen!2skz"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6" />
                <span>Связаться с нами</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Имя *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Телефон
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Опишите ваш вопрос или запрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Отправить сообщение</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Обратите внимание:</strong> Мы отвечаем на все
                  обращения в течение 24 часов в рабочие дни.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Способы связи
              </h3>
              <p className="text-blue-100 text-lg">
                Выберите удобный для вас способ получения консультации
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-white bg-opacity-10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-10 h-10 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Телефонная консультация
                </h4>
                <p className="text-blue-100">
                  Получите быструю консультацию по телефону
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-white bg-opacity-10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-10 h-10 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Email консультация
                </h4>
                <p className="text-blue-100">
                  Отправьте подробный запрос на электронную почту
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-white bg-opacity-10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Личная встреча</h4>
                <p className="text-blue-100">
                  Посетите наш офис для детальной консультации
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
