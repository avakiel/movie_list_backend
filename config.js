require("dotenv").config();
const fs = require('fs');
const config = {
    user: process.env.DB_USER || "default_user",
    password: process.env.DB_PASSWORD || "default_password",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "default_db",
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('./ca.pem').toString(),
    },
};

module.exports = {
    config
}