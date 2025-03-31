FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --production
RUN npm install -g nodemon
COPY . .
CMD ["npm", "run", "dev:api"]