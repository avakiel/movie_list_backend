'use strict';
const { createServer } = require('./server');
require('dotenv').config();

const PORT = process.env.DB_PORT || 5700;

createServer().listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});