# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Install serve globally
RUN yarn global add serve

# Copy your source files
COPY . .

# Display structure for debugging
RUN ls -R

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Command to serve your app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]
