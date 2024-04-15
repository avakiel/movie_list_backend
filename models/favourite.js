const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { Movie } = require('./movie');


const Favourite = sequelize.define('Favourite', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull:false
  }
}, {
  tableName: 'favourite',
  timestamps: false
});

Favourite.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });

module.exports = {
    Favourite
}