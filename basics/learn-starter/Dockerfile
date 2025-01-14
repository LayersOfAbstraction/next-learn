# To build this in Docker 
#```bash
#docker build -t my-next-app .
#```
# To run this in Docker 
#```bash
#docker run -p 3000:3000 my-next-app
#```
# Use an official Node runtime as the base image with the specified version
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
