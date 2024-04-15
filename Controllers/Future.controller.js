const {
  getAllFuture,
  deleteFromFuture,
  addToFuture,
} = require("../Services/Future.service");
const { OK, NOT_FOUND } = require("../utils/StatusCodes");

const getAllFutureController = async (req, res) => {
  res.status(OK).send(await getAllFuture());
};

const deleteFutureController = async (req, res) => {
  const { id } = req.params;

  const movie = await deleteFromFuture(id);

  if (!movie) {
    res.sendStatus(NOT_FOUND);

    return;
  }

  res.status(OK).send(movie);
};

const addToFutureController = async (req, res) => {
  const { id } = req.params;
  const add = await addToFuture(id);

  if (!add) {
    res.sendStatus(NOT_FOUND);

    return;
  }

  res.status(OK).send(add);
};

module.exports = {
  addToFutureController,
  deleteFutureController,
  getAllFutureController,
};
