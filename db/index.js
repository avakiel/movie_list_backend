const fs = require('fs');
const pg = require('pg');
const url = require('url');
const { Sequelize } = require('sequelize');
const utils = require('util');
const { config } = require('../config');
require('dotenv').config();

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});

require('dotenv').config();
global.TextEncoder = utils.TextEncoder;

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.host,
  port: config.port,
  database: config.database,
  username: config.user,
  password: config.password,
  dialectOptions: {
    ssl: config.ssl
  }
});

module.exports = {
  sequelize,
};
