FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g @angular/cli @ionic/cli
RUN ionic build --prod

FROM nginx:alpine
COPY ./config/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/www /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
