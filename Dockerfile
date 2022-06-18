FROM node:slim
COPY ./ ./
CMD [ "npm", "start" ]
