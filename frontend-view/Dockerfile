# Build Stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
