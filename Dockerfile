FROM nginx
WORKDIR /usr/share/nginx/html

COPY dist .
# COPY config/default.conf /etc/nginx/conf.d
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]