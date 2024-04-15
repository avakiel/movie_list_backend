'use strict';

const express = require('express');
const { moviesRouter } = require('./Routes/moviesRouter');
const { favouriteRouter } = require('./Routes/favouriteRouter');
const { futureRouter } = require('./Routes/futureRouter');
const { watchedRouter } = require('./Routes/watchedRouter');

function createServer() {
  const server = express();

server.use('/movies', moviesRouter)
server.use('/favourite', favouriteRouter)
server.use('/future', futureRouter)
server.use('/watched', watchedRouter)

  return server;
}

module.exports = {
  createServer,
};
