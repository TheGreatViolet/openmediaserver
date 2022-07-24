FROM node:latest

COPY ../server /app

WORKDIR /app
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build

EXPOSE 8080

CMD pnpm start