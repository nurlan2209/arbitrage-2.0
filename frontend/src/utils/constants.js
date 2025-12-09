// Основная информация о компании
export const COMPANY_INFO = {
  name: "Международный центр Арбитражных решений",
  shortName: "МЦ Арбитраж",
  address: "г. Астана, Проспект Туран, дом 83/2, НП 4",
  phones: ["+7 (707) 329-39-69", "+7 (701) 558-80-33"],
  email: "arbitragerk.kz@gmail.com",
  website: "https://arbitragerk.kz",
  coordinates: {
    lat: 51.084928,
    lng: 71.386425,
  },
};

// Председатель
export const CHAIRMAN = {
  name: "Коканова Дана Каймашевна",
  experience: `Опыт работы: секретарь судебного заседания суда г. Астаны (2000–2001), 
    юрист и юристконсульт в ТОО «Актюбинское Управление газового хозяйства» 
    и РГП «Центр по недвижимости МЮ РК по Актюбинской области» (2003–2005), 
    начальник юридического отдела ТОО «Азия Сафари Сервис» г. Алматы (2005–2006), 
    начальник юридического отдела РГКП «Дирекция административных зданий Администрации Президента и Правительства РК» УДП РК г. Астаны (2007–2009), 
    директор РГКП «Дирекция административного здания ВС РК» г. Астана (2009–2011).`,
};

// Рабочие часы
export const WORKING_HOURS = {
  weekdays: {
    days: "Пн - Пт",
    hours: "9:00 - 18:00",
  },
  weekend: {
    days: "Сб - Вс",
    hours: "Выходной",
  },
};

// Доступные языки
export const LANGUAGES = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "kz", label: "Қазақша", flag: "🇰🇿" },
];

// Навигационное меню
export const NAVIGATION = [
  { key: "home", labelKey: "nav_main", path: "/" },
  { key: "about", labelKey: "nav_about", path: "/about" },
  {
    key: "documents",
    labelKey: "nav_documents",
    path: "/documents",
    isDropdown: true,
    dropdownItems: [
      {
        key: "reglament",
        labelKey: "nav_reglament",
        path: "/documents/reglament",
      },
      {
        key: "registry",
        labelKey: "nav_registry",
        path: "/documents/registry",
      },
      {
        key: "agreements",
        labelKey: "nav_agreements",
        path: "/documents/agreements",
      },
    ],
  },
  { key: "news", labelKey: "nav_news", path: "/news" },
  { key: "contact", labelKey: "nav_contacts", path: "/contact" },
];

// Социальные сети
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/arbitragerk",
  instagram: "https://instagram.com/arbitragerk",
  linkedin: "https://linkedin.com/company/arbitragerk",
  telegram: "https://t.me/arbitragerk",
};

// Цветовая схема
export const COLORS = {
  primary: "#003366",
  secondary: "#001a33",
  accent: "#004080",
  link: "#0056b3",
  lightBlue: "#e6f2ff",
  white: "#ffffff",
  lightGray: "#f8f9fa",
  mediumGray: "#6c757d",
  textColor: "#2c3e50",
  borderColor: "#e9ecef",
};

// Размеры экранов
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// API endpoints (для будущего использования)
export const API_ENDPOINTS = {
  base: process.env.REACT_APP_API_URL || "http://localhost:3001/api",
  contact: "/contact",
  news: "/news",
  documents: "/documents",
};

// Метаданные для SEO
export const SEO = {
  defaultTitle: "Международный центр Арбитражных решений",
  titleTemplate: "%s | Международный центр Арбитражных решений",
  description:
    "Справедливое и беспристрастное отправление правосудия в рамках юрисдикции, установленной законодательством",
  keywords: "арбитраж, суд, правосудие, астана, казахстан, международный центр",
  ogImage: "/images/og-image.jpg",
};
