FROM node:slim
WORKDIR /src
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm", "run", "dev" ]