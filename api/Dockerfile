# FROM node:16-alpine as base
# WORKDIR /src
# # COPY package*.json ./

# COPY . .
# RUN npm cache clean rm -rf node_modules

# FROM base as dev

# ENV NODE_ENV=development

# # RUN npm cache clean --force && npm install'
# RUN npm install
# RUN npm uninstall bcrypt 
# RUN npm install bcrypt

# # ENTRYPOINT ["npm", "start"]

# EXPOSE 4000


# FROM node:16-alpine as base

# WORKDIR /src

# COPY package*.json ./
# ENV NODE_ENV=development
# RUN npm install
# RUN npm uninstall bcrypt 
# RUN npm install bcrypt

# #COPIA TUDO PRO WORKDIR
# COPY . . 

# CMD ["npm", "start"]