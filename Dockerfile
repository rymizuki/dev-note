FROM node:11.10-alpine
WORKDIR /usr/local/docker/app
COPY ./ /usr/local/docker/app
RUN npm install
CMD npm run dev
EXPOSE 3000