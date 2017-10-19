### STAGE1 : INSTALL NPM AND BUILD PROD VERSION ###

FROM node:6.11.3-alpine as builder
COPY package.json ./
RUN rm -rf node_modules && npm i && mkdir /weighttracker && cp -R ./node_modules ./weighttracker
WORKDIR /weighttracker
COPY . .
RUN npm run build

### STAGE2 : SETUP NGNIX AND PUT PROD ANGULAR FILE INTO HTTP SERVER ###
FROM nginx:1.12.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /weighttracker/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]
