FROM node:14

RUN npm install

ENV PORT=${PORT}

ENV DATA_TEXT=${DATA_TEXT}

WORKDIR /app

COPY package.json app.js .

RUN useradd -ms /bin/bash worker1

USER worker1

CMD ["npm", "start"]