FROM node:12-alpine
WORKDIR /project
COPY project/ .
RUN yarn
CMD ["yarn", "build-css-prod"]
CMD ["yarn", "build-prod"]

