FROM nginx:stable-alpine

LABEL maintainer="Egova Flavia <https://egova.my.id>"
LABEL description="Landing Page & Portfolio Egova Flavia (egova.my.id)"

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static website files
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
