const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/index')
const { Movie } = require('./movie');


const Future = sequelize.define('Future', {
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
  tableName: 'future',
  timestamps: false
});

Future.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });

module.exports = {
    Future
}