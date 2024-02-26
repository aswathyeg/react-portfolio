FROM node:20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
# RUN npm config set strict-ssl false
RUN npm install 
COPY . .
RUN mv /app/public/index.template.html /app/public/index.html
RUN npm run build

FROM nginx:1.18.0-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/init.sh /usr/share/nginx/html/init.sh
RUN ["chmod", "+x", "/usr/share/nginx/html/init.sh"]

EXPOSE 80
CMD /usr/share/nginx/html/init.sh