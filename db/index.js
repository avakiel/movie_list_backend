const fs = require('fs');
const pg = require('pg');
const url = require('url');
const { Sequelize } = require('sequelize');
const utils = require('util');

const config = {
    user: "avnadmin",
    password: "AVNS_9V6CXeX55eGUa9lqgYw",
    host: "pg-3b4fbe82-movie-list-db.b.aivencloud.com",
    port: 17443,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUX/J8hXPm2Rzk2xxpEGfksSYasr0wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMDdjYzNmYzctOWU0ZC00MTg5LWExZjQtOGZmMmU1ZTRh
MTA4IFByb2plY3QgQ0EwHhcNMjQwNDE1MjExNDI0WhcNMzQwNDEzMjExNDI0WjA6
MTgwNgYDVQQDDC8wN2NjM2ZjNy05ZTRkLTQxODktYTFmNC04ZmYyZTVlNGExMDgg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALQv4lac
IxCpXVi/E5JeYI8C84xte5M8gwRUFfp1W/oTVcTJ1TZB3wajTAMN47NBtsQ+Ezjv
OpAKxJQzhY/Olrjm4Mdob0iLH/D7cQWBnOOqsPzrgh7I7YFvQd/4EFv2BSTVF1dr
k/CXybCZQwww5EWadFdP0ciSHOMIW9MAEWdqEvFXxil1FqJR/k9bHtzT+SsYH27w
7nJ+kBJyE0aeEwU7h6EcfXFHnTMkdzhQhgse7HB97jpnA6H+UfSyk18fHnc2cLLt
0+7TdsuAfIPwNBTjjHfEYqlX2hW/YZXibMER0QKP0VGidzixqSp1LAakkmCr71Pv
0cPUBTl/dqcsmXDJbvzFjscVkbCwTbnZ5iH7cVzfhT0iGXEOnbRU24AoahCNDdjZ
4VTsuyabW0Mc8CNheMCrzu3WVqVR4XFxHiDAZ+QzoSz1/18odm8wGcAKKe5HYdqT
DL/xzy8AFCKJHHvr34/PDX/lGhYAxZ9Qg3Tj5F/LdJN6awXp2UdcX4Z/0wIDAQAB
oz8wPTAdBgNVHQ4EFgQUXhkIOZ2a/vXtEwb/uw0nt9SKQzkwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABgd1un/yjUaMDz3
aR2JKJI7oH5brVrEfLnLky4R/R1cuNnW1XBJUTXs+NitxHYVLyUqOa7l8iwuPAb/
RdxizdMY9X75IGeK/0NxGTAsgTM58dRs155tLFtY7D6T/19F2RppmqigNI/6FDIk
qIMLIwmK2p+wYxHxyqhKyg02S4CuONA+L6Bu1r7nlDs4ycvQHBvRkdHULsZTj2uM
otoNCYb4uwy7m3O6AUKYNxayWUbAHc5iEqgh9UnAMCwoHgmeCck23E56vox02ljZ
XgypQjW+RwuNWHfq4bacTcbj2cY77SEr89Q2wHx36EV7HAcjAn2JQ3anLl4SzwHJ
beeK6Vx6FZj61qlNyacmQCsTR3gJcpAp5ZKo3S3RQYX3HSLKO1pvgMLNTVMU0BPH
GBE23vMi/+pzxB52wBT7ZtYcrJvBFqfdDls4CoCg9Dq+HxxRER1RAdFFt5sOCvNl
eB9AVXjZziOs1GVmlrolOH8L81rlzW72fjbYqSziJd0qF5LHHQ==
-----END CERTIFICATE-----`,
    },
};

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
