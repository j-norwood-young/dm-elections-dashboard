FROM node:lts
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if your application needs it)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]