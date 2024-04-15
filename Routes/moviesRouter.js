const express = require("express");
const bodyParser = require("body-parser");
const {
  getAllMoviesController,
  getMovieByTitleController,
  deleteMovieByIdController,
  updateMovieByIdController,
  postMovieController,
} = require("../Controllers/Movies.controller");

const moviesRouter = express.Router();

moviesRouter.use(bodyParser.json());

moviesRouter.get("/", getAllMoviesController);
moviesRouter.get("/:title", getMovieByTitleController);
moviesRouter.delete("/:id", deleteMovieByIdController);
moviesRouter.patch("/:id", updateMovieByIdController);
moviesRouter.post('/', postMovieController)

module.exports = {
  moviesRouter,
};
