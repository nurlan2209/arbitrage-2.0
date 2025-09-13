# Этап 1: Сборка React-приложения
FROM node:18-alpine as build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы фронтенда
COPY . .

# Собираем оптимизированную версию сайта
RUN npm run build

# Этап 2: Сервер для раздачи статических файлов
FROM nginx:1.25-alpine

# Копируем собранный сайт из первого этапа в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Запускаем Nginx, когда контейнер стартует
CMD ["nginx", "-g", "daemon off;"]