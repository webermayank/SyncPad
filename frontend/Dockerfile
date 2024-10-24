# Use Node.js image for React development
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001 (for development)
EXPOSE 3001

# Run the React development server
CMD ["npm", "run", "dev"]
