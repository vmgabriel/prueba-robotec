FROM node:8

# Install Sails globally
RUN npm install -g sails

# Create app directory
RUN mkdir -p /API
# Change Work directory to app
WORKDIR /API

# Install app dependencies
COPY package.json /API/
RUN npm install


# Bundle app source
COPY . /API

EXPOSE 1337

CMD ["sails", "lift"]
