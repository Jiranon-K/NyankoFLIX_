FROM node:latest

WORKDIR /app


ARG VITE_TMDB_API_KEY
ENV VITE_TMDB_API_KEY=$VITE_TMDB_API_KEY

COPY package*.json ./
RUN npm install --force

COPY . .


RUN npm run build

EXPOSE 3999

CMD ["npm", "run", "preview"]