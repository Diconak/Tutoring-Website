FROM node:21-alpine

#Setup the base directory
WORKDIR /app/

# Copy package files first for better caching
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Expose port
EXPOSE 3000

#RUN npx prisma generate 

CMD [ "npm", "run", "dev" ]