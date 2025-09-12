import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Получаем значение из localStorage или используем начальное значение
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
      return initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Функция для установки значения
  const setValue = (value) => {
    try {
      // Позволяем передавать функцию как в useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      // Сохраняем в localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
