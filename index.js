'use strict';

const { createServer } = require('./server');

const PORT = process.env.PORT || 5700;

createServer().listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});