# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["yarn", "preview", "--host", "0.0.0.0", "--port", "3000"]




