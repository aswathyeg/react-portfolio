#!/bin/sh

printenv

cd /usr/share/nginx/html

envsubst < index.html > index.temp.html
mv index.temp.html index.html

nginx -g "daemon off;"