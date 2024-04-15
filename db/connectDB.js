const { sequelize } = require("./index");
const { loadSeed } = require("./uploadSeedData");
const  models = require('../models/models')
const movies = require("./seeders/db.json");


const connect = async () => {
  sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
};

connect();
