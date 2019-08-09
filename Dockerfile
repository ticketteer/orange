FROM node:12-alpine

COPY . /app
WORKDIR /app

RUN apk update \
 && apk add git bash openssh \
 && rm -rf node_modules \
 && npm install

COPY docker-config.json /root/.docker/config.json
