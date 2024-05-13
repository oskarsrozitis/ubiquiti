# Use an official Node 18 runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock (assuming you are now using yarn.lock)
COPY package*.json ./

# Install dependencies
# Using --frozen-lockfile to avoid updating the lock file
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build your app (assuming you have a build script in your package.json)
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["yarn", "start"]
