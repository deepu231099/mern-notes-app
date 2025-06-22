# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install only production deps
COPY package*.json ./
RUN npm install

# Copy rest of the backend code
COPY . .

# Expose backend port (change if needed)
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
