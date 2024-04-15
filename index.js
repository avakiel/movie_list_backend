'use strict';

const { createServer } = require('./server');

createServer().listen(5700, () => {
  console.log('Server is running on localhost:5700');
});
