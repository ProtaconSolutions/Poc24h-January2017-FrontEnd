FROM nginx:mainline

COPY ./Docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY /dist/ /usr/share/nginx/html
