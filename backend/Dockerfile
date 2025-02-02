# Use an official Node.js runtime as the base image.
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy dependency definitions.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application.
COPY . .

# Build the project.
RUN npm run build

# Expose the API port.
EXPOSE 3000

# Run the application.
CMD ["node", "dist/main.js"]
