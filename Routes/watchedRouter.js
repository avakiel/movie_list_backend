const express = require("express");
const bodyParser = require("body-parser");
const { getAllWatchedController, deleteWatchedController, addToWatchedController } = require("../Controllers/Watched.controller");

const watchedRouter = express.Router();

watchedRouter.use(bodyParser.json());

watchedRouter.get("/", getAllWatchedController);
watchedRouter.delete("/:id", deleteWatchedController);
watchedRouter.post("/", addToWatchedController);

module.exports = {
  watchedRouter,
};
