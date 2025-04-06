FROM node:20

WORKDIR /app

# try to cache every expensive opeartions by structuring the docker commands

COPY package* .
COPY ./prisma .

RUN npm install 

RUN npx prisma generate

COPY . .

# RUN npm install
# RUN npx prisma generate
# RUN npm run build

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
