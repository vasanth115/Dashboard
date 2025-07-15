FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app
COPY dist .

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
