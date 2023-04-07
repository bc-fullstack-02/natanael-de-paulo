FROM node:18.15.0-alpine as base

WORKDIR /app

COPY . .

ENV NODE_ENV=development
ENV PORT=3001

RUN npm install
CMD ["npm", "dev"]