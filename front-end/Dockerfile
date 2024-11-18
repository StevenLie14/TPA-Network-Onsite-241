FROM node:18 as dev
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
RUN npm install -D sass

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]