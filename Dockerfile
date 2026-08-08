# Base stage for shared dependencies
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Development container stage (runs gatsby develop on port 8000)
FROM base AS development
COPY . .
EXPOSE 8000
CMD ["npx", "gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]

# Build container stage (compiles static site to /app/public)
FROM base AS builder
COPY . .
CMD ["npm", "run", "build"]

# Serve container stage (serves built static site on port 9000)
FROM base AS server
COPY . .
EXPOSE 9000
CMD ["npx", "gatsby", "serve", "-H", "0.0.0.0", "-p", "9000"]
