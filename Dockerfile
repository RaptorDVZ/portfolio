FROM alpine
WORKDIR /app
RUN apk add --update nodejs npm
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["node","index.js"]