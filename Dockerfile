# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install global dependencies
RUN npm install -g typescript

# Copy package.json and install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Attempt to compile and build the app
RUN yarn build

# Expose the application on port 3000
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "start"]
