'use strict';

const { Sequelize } = require('sequelize');
const utils = require('util');

// Needed for testing purposes, do not remove
require('dotenv').config();
global.TextEncoder = utils.TextEncoder;

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

/*
  All credentials setted to default values (exsept password - it is exapmle)
  replace if needed with your own
*/

const sequelize = new Sequelize({
  database: 'Movies',
  username: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  password: '123',
});

module.exports = {
  sequelize,
};
