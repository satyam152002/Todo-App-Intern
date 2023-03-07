FROM node:slim
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
RUN npm install -g serve
ENTRYPOINT ["serve","-s","build"]