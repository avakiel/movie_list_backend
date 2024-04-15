const { Watched } = require("./watched");
const { Movie } = require("./movie");
const { Favourite } = require("./favourite");
const { Future } = require("./future");

module.exports = {
    models: {
        Watched,
        Movie,
        Future,
        Favourite,
    }
}