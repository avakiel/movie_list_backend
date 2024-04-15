const express = require("express");
const bodyParser = require("body-parser");
const { getAllFutureController, deleteFutureController, addToFutureController } = require("../Controllers/Future.controller");

const futureRouter = express.Router();

futureRouter.use(bodyParser.json());

futureRouter.get("/", getAllFutureController);
futureRouter.delete("/:id", deleteFutureController);
futureRouter.post("/:id", addToFutureController);

module.exports = {
  futureRouter,
};
