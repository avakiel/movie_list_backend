const { Future } = require("../models/future");
const { Movie } = require("../models/movie");

const getAllFuture = async () => {
  try {
    const future = await Future.findAll({
      include: [
        {
          model: Movie,
          required: true,
        },
      ],
    });
    return future.map((future) => future.Movie);
  } catch (error) {
    console.error("Error fetching future movies:", error);
    throw error;
  }
};

const deleteFromFuture = async (id) => {
  try {
    await Future.destroy({
      where: {
        movieId: +id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting from future:", error);
    throw new Error("Delete error in database");
  }
};

const addToFuture = async (id) => {
  try {
    await Future.findOrCreate({
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
    console.error("Error adding to future:", error);
    throw new Error("Addition error in database");
  }
};

module.exports = {
  addToFuture,
  deleteFromFuture,
  getAllFuture,
};
