# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files separately for better cache
COPY pnpm-lock.yaml package.json ./

# Install only dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the project
COPY . .

# Build the app
RUN pnpm run build

# 2. Serve stage
FROM node:18-alpine

# Install serve globally
RUN npm install -g pnpm serve

WORKDIR /app

# Copy built output from the builder
COPY --from=builder /app/dist .  # If you're using Vite
# COPY --from=builder /app/build .  # If you're using CRA

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
