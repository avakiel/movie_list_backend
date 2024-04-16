const {
    getAllWatched,
    deleteFromWatched,
    addToWatched,
  } = require("../Services/Watched.service");
  const { OK, NOT_FOUND } = require("../utils/StatusCodes");
  
  const getAllWatchedController = async (req, res) => {
    res.status(OK).send(await getAllWatched());
  };
  
  const deleteWatchedController = async (req, res) => {
    const { id } = req.params;
  
    const movie = await deleteFromWatched(id);
  
    if (!movie) {
      res.sendStatus(NOT_FOUND);
  
      return;
    }
  
    res.status(OK).send(movie);
  };
  
  const addToWatchedController = async (req, res) => {
    const { id } = req.body;
    const add = await addToWatched(id);
  
    if (!add) {
      res.sendStatus(NOT_FOUND);
  
      return;
    }
  
    res.status(OK).send(add);
  };
  
  module.exports = {
    addToWatchedController,
    deleteWatchedController,
    getAllWatchedController,
  };
  