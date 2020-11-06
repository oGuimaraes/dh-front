# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /home/node/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /home/node/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent && yarn cache clean

# add app
COPY --chown=node:node . ./

# change user
USER node

# start app
CMD ["yarn", "start"]