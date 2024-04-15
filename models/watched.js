const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { Movie } = require('./movie');


const Watched = sequelize.define('Watched', {
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
  tableName: 'watched',
  timestamps: false
});

Watched.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });

module.exports = {
    Watched
}