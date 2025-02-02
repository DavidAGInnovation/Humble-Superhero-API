# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

# Copy package definitions and install dependencies.
COPY package.json yarn.lock* package-lock.json* ./
# Prefer yarn if available, else npm
RUN if [ -f yarn.lock ]; then yarn install; else npm install; fi

# Copy source files and build.
COPY . .
RUN if [ -f yarn.lock ]; then yarn build; else npm run build; fi

# Stage 2: Serve the built app with Nginx.
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
