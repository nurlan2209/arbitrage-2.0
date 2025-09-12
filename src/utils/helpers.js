// Утилиты для работы с классами CSS
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Форматирование телефонных номеров
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 11 && cleaned.startsWith("7")) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(
      7,
      9
    )}-${cleaned.slice(9)}`;
  }

  return phone;
};

// Валидация email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Валидация телефона
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleaned = phone.replace(/\D/g, "");
  return phoneRegex.test(cleaned) && cleaned.length >= 10;
};

// Форматирование даты
export const formatDate = (date, locale = "ru-RU") => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(locale, options);
};

// Генерация slug из строки
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9а-я]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// Truncate текста
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
};

// Scroll to element
export const scrollToElement = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Проверка мобильного устройства
export const isMobile = () => {
  return window.innerWidth < 768;
};

// Debounce функция
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle функция
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Копирование в буфер обмена
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback для старых браузеров
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

// Получение параметров URL
export const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  const result = {};

  for (let [key, value] of params) {
    result[key] = value;
  }

  return result;
};

// Установка параметра URL
export const setUrlParam = (key, value) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState({}, "", url);
};

// Удаление параметра URL
export const removeUrlParam = (key) => {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  window.history.pushState({}, "", url);
};

// Генерация случайного ID
export const generateId = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};

// Проверка поддержки WebP
export const supportsWebP = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  return canvas.toDataURL("image/webp").startsWith("data:image/webp");
};

// Ленивая загрузка изображений
export const lazyLoadImage = (img) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove("lazy");
        imageObserver.unobserve(image);
      }
    });
  });

  imageObserver.observe(img);
};
