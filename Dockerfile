FROM node:14-alpine

#RUN apk add --no-cache mongodb=4.4.8-r0

WORKDIR /index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]