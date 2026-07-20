#Pick the latest node image which includes v24
FROM node:24.18.0

#Create the working dir
WORKDIR /app

#Copy dependency files
COPY package.json package-lock.json .

#Install dependencies
RUN npm install

#Copy the project folder
COPY . .

#Run the program
CMD ["npm", "run", "dev"]