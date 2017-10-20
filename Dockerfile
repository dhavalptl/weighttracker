### STAGE1 : INSTALL NPM AND BUILD PROD VERSION ###

FROM node:6.11.3-alpine as builder
RUN mkdir -p /weighttracker
WORKDIR /weighttracker
ADD . /weighttracker
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn cache clean

### STAGE2 : SETUP NGNIX AND PUT PROD REACTJS FILE INTO HTTP SERVER ###

FROM nginx:1.12.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /weighttracker/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]
