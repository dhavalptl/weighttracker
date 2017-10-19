### STAGE1 : INSTALL NPM AND BUILD PROD VERSION ###

FROM node:6.11.3-alpine as builder
COPY package.json package-lock.json ./
RUN rm -rf node_modules && npm i && mkdir /bmicalc && cp -R ./node_modules ./bmicalc
WORKDIR /bmicalc
COPY . .
RUN npm run build

### STAGE2 : SETUP NGNIX AND PUT PROD ANGULAR FILE INTO HTTP SERVER ###
FROM nginx:1.12.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /bmicalc/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]