
const { Movie } = require("../models/movie");
const { Watched } = require("../models/watched");

const getAllWatched = async () => {
  try {
    const watched = await Watched.findAll({
      include: [
        {
          model: Movie,
          required: true,
        },
      ],
    });
    return watched.map((watched) => watched.Movie);
  } catch (error) {
    console.error("Error fetching watched movies:", error);
    throw error;
  }
};

const deleteFromWatched = async (id) => {
  try {
    await Watched.destroy({
      where: {
        movieId: +id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting from watched:", error);
    throw new Error("Delete error in database");
  }
};

const addToWatched = async (id) => {
  try {
    await Watched.findOrCreate({
      where: {
        movieId: +id,
      },
    });
    
    const movie = await Movie.findOne({
      where: {
        id: +id
      }
    });

    return movie;

  } catch (error) {
    console.error("Error adding to watched:", error);
    throw new Error("Addition error in database");
  }
};

module.exports = {
  addToWatched,
  deleteFromWatched,
  getAllWatched,
};
