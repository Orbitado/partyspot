# Base image with Node.js 20 Alpine (smaller footprint)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install system dependencies (needed for some Node.js packages)
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 3000 (default Next.js port)
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
