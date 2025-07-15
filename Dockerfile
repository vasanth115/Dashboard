# Step 1: Build Stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Serve Stage
FROM node:18-alpine

# Install serve to serve static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy only the built output from the builder stage
COPY --from=builder /app/dist .

# Expose port
EXPOSE 3000

# Run the app using serve
CMD ["serve", "-s", ".", "-l", "3000"]
