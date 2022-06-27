FROM node:latest

WORKDIR /card

COPY package*.json ./
COPY . . 
RUN npm install


EXPOSE 3000