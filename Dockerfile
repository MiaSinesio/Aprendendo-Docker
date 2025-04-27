FROM node:23-alpine 

WORKDIR /app

COPY random.js .

CMD ["node", "random.js"]