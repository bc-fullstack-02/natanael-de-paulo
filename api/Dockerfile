FROM node:18.15.0-alpine as base
RUN mkdir -p /home/node/server  && chown -R node:node /home/node/server
WORKDIR /home/node/server
COPY  package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=development
RUN npm run build