# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Copy your source files
COPY . .

# Display structure for debugging
RUN ls -R

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
