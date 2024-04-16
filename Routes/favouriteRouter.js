const express = require("express");
const bodyParser = require("body-parser");
const { getAllFavouriteController, deleteFavouriteController, addToFavouriteController } = require("../Controllers/Favourite.controller");

const favouriteRouter = express.Router();

favouriteRouter.use(bodyParser.json());

favouriteRouter.get("/", getAllFavouriteController);
favouriteRouter.delete("/:id", deleteFavouriteController);
favouriteRouter.post("/", addToFavouriteController);

module.exports = {
  favouriteRouter,
};
