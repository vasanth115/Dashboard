# Base image
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Expose the port the app runs on (default for Vite is 5173, for CRA is 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
