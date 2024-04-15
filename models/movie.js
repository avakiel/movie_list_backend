const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/index')


const Movie = sequelize.define('Movie', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    collate: 'utf8_general_ci',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
  release_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genre: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  actors: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'movies',
  timestamps: false
});

module.exports = {
    Movie
}