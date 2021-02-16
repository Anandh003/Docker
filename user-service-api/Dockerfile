FROM node:14.15.0-alpine3.12
# Any command  follows WORKDIR will execute within directory
WORKDIR /app
ADD  package*.json ./
RUN npm install
ADD . .
CMD node index.js
