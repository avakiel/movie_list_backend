const { Favourite } = require("../models/favourite");
const { Movie } = require("../models/movie");

const getAllFavourite = async () => {
  try {
    const favourites = await Favourite.findAll({
      include: [
        {
          model: Movie,
          required: true,
        },
      ],
    });
    return favourites.map((favourite) => favourite.Movie);
  } catch (error) {
    console.error("Error fetching favourite movies:", error);
    throw error;
  }
};

const deleteFromFavourite = async (id) => {
  try {
    await Favourite.destroy({
      where: {
        movieId: +id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting from favourites:", error);
    throw new Error("Delete error in database");
  }
};

const addToFavourite = async (id) => {
  try {
    const existingFavourite = await Favourite.findOne({
      where: {
        movieId: +id,
      },
    });

    if (!existingFavourite) {
      await Favourite.create({ movieId: +id });
      return id;
    }
  } catch (error) {
    console.error("Error adding to favourites:", error);
    throw new Error("Addition error in database");
  }
};

module.exports = {
  getAllFavourite,
  deleteFromFavourite,
  addToFavourite,
};
