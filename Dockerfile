FROM node:latest
WORKDIR /app
COPY package*.json .
RUN npm install --force
COPY . .
EXPOSE  3999
RUN npm run build
CMD [ "npm", "run", "preview" ] 