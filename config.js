
module.exports = {
    user: process.env.DB_USER || "default_user",
    password: process.env.DB_PASSWORD || "default_password",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "default_db",
    ssl: process.env.DB_SSL === "true"
        ? {
            rejectUnauthorized: true,
            ca: process.env.DB_SSL_CERT || `-----BEGIN CERTIFICATE-----\nYour certificate\n-----END CERTIFICATE-----`,
        }
        : false,
};
