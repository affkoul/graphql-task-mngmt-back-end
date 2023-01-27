FROM node:16.17.0 AS PRODUCTION

WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 0000

CMD [ "npm", "run", "start" ]