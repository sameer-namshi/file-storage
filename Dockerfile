FROM node:16-alpine

RUN npm install -g nodemon node-gyp

WORKDIR /src
COPY package.json package-lock.json /src/

RUN npm i

COPY . /src

RUN chmod +x run.sh

EXPOSE 8082

CMD ["./run.sh"]
