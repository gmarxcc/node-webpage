FROM node:20.4.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./components/ ./components/
COPY ./lib ./lib
COPY ./pages ./pages	
COPY ./public ./public	
COPY next.config.js ./
COPY prettifier.config.js ./
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]

