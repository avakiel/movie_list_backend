const {
  getAllMovies,
  getMovieByTitle,
  deleteMovieById,
  patchMovieById,
  postMovie,
} = require("../Services/Movies.service");
const {
  OK,
  NOT_FOUND,
  BAD_REQUEST,
  CREATED,
  NO_CONTENT,
} = require("../utils/StatusCodes");

const getAllMoviesController = async (req, res) => {
  res.status(OK).send(await getAllMovies());
};

const getMovieByTitleController = async (req, res) => {
  const { title } = req.params;

  const movies = await getMovieByTitle(title);

  if (!movies || movies.length === 0) {
    res.sendStatus(NOT_FOUND);
    return;
  }

  res.status(OK).send(movies);
};

const deleteMovieByIdController = async (req, res) => {
  const { id } = req.params;

  const movieId = await deleteMovieById(id);

  if (!movieId) {
    res.sendStatus(NOT_FOUND);

    return;
  }

  res.status(OK).send(id);
};

const updateMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const updatedMovie = await patchMovieById(id, updatedData);

  if (!updatedMovie) {
    res.sendStatus(NOT_FOUND);

    return;
  }

  res.status(OK).send(updatedMovie);
};

const postMovieController = async (req, res) => {
  const movie = req.body;

  const newMovie = await postMovie(movie);

  if (!newMovie) {
    res.sendStatus(NO_CONTENT);

    return;
  }

  res.status(OK).send(newMovie);
};

module.exports = {
  getAllMoviesController,
  getMovieByTitleController,
  deleteMovieByIdController,
  updateMovieByIdController,
  postMovieController,
};
