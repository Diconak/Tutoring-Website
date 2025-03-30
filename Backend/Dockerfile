FROM node:23-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Generate Prisma client

EXPOSE 3000

#RUN npx prisma generate 

CMD [ "npm", "run", "dev" ]