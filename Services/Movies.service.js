const { Movie } = require("../models/movie");
const { Op } = require("sequelize");

const getAllMovies = async () => {
  return Movie.findAll();
};

const getMovieByTitle = async (title) => {
  const movies = await Movie.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });
  return movies;
};

const deleteMovieById = async (id) => {
  try {
    await Movie.destroy({
      where: {
        id: +id,
      },
    });
    return id;
  } catch (error) {
    return error, 'delete error in db';
  }
};

const patchMovieById = async (id, data) => {
    try {
        const [updatedRowsCount] = await Movie.update(data, {
            where: {
                id: id
            }
        });

        if (updatedRowsCount === 0) {
            return null;
        }

        const updatedMovie = await Movie.findByPk(id);

        return updatedMovie;

    } catch (error) {
        return error, 'update error in db'
    }
}

const postMovie = async (data) => {
    try {
        const newMovie = await Movie.create(data);

        return newMovie;
        
    } catch (error) {
       return error, 'create error in db'
    }
}

module.exports = {
  getAllMovies,
  getMovieByTitle,
  deleteMovieById,
  patchMovieById,
  postMovie,
};
