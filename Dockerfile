# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# 2. Serve stage
FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
