FROM node:latest

COPY . /app

WORKDIR /app
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build

CMD pnpm start