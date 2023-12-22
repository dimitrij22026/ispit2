FROM node:14
WORKDIR /app
COPY package.json .
COPY app.js .
RUN npm install
RUN useradd -ms /bin/bash worker1
USER worker1
EXPOSE ${PORT}
ENV PORT=${PORT}
ENV DATA_TEXT=${DATA_TEXT}
CMD ["npm", "start"]