import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = ({ currentPage, setCurrentPage }) => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);

  const documentGroups = {
    group1: {
      title: t("nav_group_procedures"),
      items: [
        { key: "reglament", label: t("nav_reglament") },
        { key: "sborahi", label: t("nav_sborahi") },
        { key: "reestr", label: t("nav_reestr") },
        { key: "porpod", label: t("nav_porpod") },
        { key: "porrasarb", label: t("nav_porrasarb") },
        { key: "poroznom", label: t("nav_poroznom") },
      ],
    },
    group2: {
      title: t("nav_group_samples"),
      items: [
        { key: "schema", label: t("nav_schema") },
        { key: "sogl", label: t("nav_sogl") },
        { key: "obrazcy", label: t("nav_obrazcy") },
        { key: "pogashenie", label: t("nav_pogashenie") },
        { key: "isk_edin_arbitr", label: t("nav_isk_edin_arbitr") },
        { key: "otzyv_isk", label: t("nav_otzyv_isk") },
      ],
    },
  };

  const navItems = [
    { key: "home", label: t("nav_main") },
    { key: "about", label: t("nav_about") },
    {
      key: "documents",
      label: t("nav_documents"),
      isDropdown: true,
      dropdownGroups: documentGroups,
    },
    { key: "news", label: t("nav_news") },
    { key: "contact", label: t("nav_contacts") },
  ];

  const languages = [
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
    { code: "kz", label: "Қазақша" },
  ];

  const allDropdownItems = [
    ...documentGroups.group1.items,
    ...documentGroups.group2.items,
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b-4 border-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src="/images/logo-blue2.png"
                  alt="Логотип Международного центра Арбитражных решений"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-blue-900 font-bold text-lg leading-tight max-w-xs hidden md:block">
                {t("logo_text")}
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                {item.isDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDocumentsDropdownOpen(true)}
                    onMouseLeave={() => setIsDocumentsDropdownOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 pb-1 transition-all font-medium">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {isDocumentsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white shadow-xl rounded-lg border p-4 z-10 w-max">
                        <div className="flex space-x-8">
                          {Object.values(item.dropdownGroups).map((group) => (
                            <div key={group.title} className="flex-1">
                              <h3 className="font-bold text-blue-900 px-4 pb-2 mb-2 border-b">
                                {group.title}
                              </h3>
                              <div className="flex flex-col">
                                {group.items.map((subItem) => (
                                  <button
                                    key={subItem.key}
                                    onClick={() => {
                                      setCurrentPage(subItem.key);
                                      setIsDocumentsDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-gray-50 hover:text-blue-900 transition-colors rounded-md"
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setCurrentPage(item.key)}
                    className={`text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 pb-1 transition-all font-medium ${
                      currentPage === item.key
                        ? "border-b-2 border-blue-900 text-blue-900"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="px-3 py-1 border border-gray-300 rounded text-blue-900 font-bold hover:bg-gray-50 transition-colors"
              >
                {currentLanguage.toUpperCase()}
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white shadow-xl rounded-lg border py-1 min-w-32 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-gray-50 hover:text-blue-900 transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-blue-900 hover:bg-gray-50 rounded transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.key}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setIsDocumentsDropdownOpen(!isDocumentsDropdownOpen)
                        }
                        className="flex items-center justify-between w-full px-4 py-2 text-blue-700 hover:bg-gray-50 rounded transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isDocumentsDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDocumentsDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {allDropdownItems.map((subItem) => (
                            <button
                              key={subItem.key}
                              onClick={() => {
                                setCurrentPage(subItem.key);
                                setIsMobileMenuOpen(false);
                                setIsDocumentsDropdownOpen(false);
                              }}
                              className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-50 rounded transition-colors"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentPage(item.key);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                        currentPage === item.key
                          ? "bg-blue-50 text-blue-900 font-medium"
                          : "text-blue-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t border-gray-200">
                <div className="px-4 mb-2 text-sm font-medium text-gray-600">
                  Язык / Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                      currentLanguage === lang.code
                        ? "bg-blue-50 text-blue-900 font-medium"
                        : "text-blue-700 hover:bg-gray-50"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
