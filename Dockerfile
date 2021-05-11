FROM node:14.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/benya-react
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app/benya-react
RUN npm install
RUN npm install -g concurrently express nodemon

EXPOSE 3000 5000
CMD ["npm", "run","dev"]

// docker build -t benya-react .
// docker run -it --rm -d -p 3000:3000 -p 5000:5000 benya-react