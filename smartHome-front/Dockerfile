FROM node:14.15.0-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist/smart-home /usr/share/nginx/html
