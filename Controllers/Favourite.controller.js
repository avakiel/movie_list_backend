const { getAllFavourite, deleteFromFavourite, addToFavourite } = require("../Services/Favourite.service")
const { OK, NOT_FOUND } = require("../utils/StatusCodes")


const getAllFavouriteController = async (req, res) => {
    res.status(OK).send(await getAllFavourite())
}

const deleteFavouriteController = async (req, res) => {
    const { id } = req.params;

    const movie = await deleteFromFavourite(id)

    if (!movie) {
        res.sendStatus(NOT_FOUND)

        return
    }

    res.status(OK).send(movie)
}

const addToFavouriteController = async (req, res) => {
    const { id } = req.body

    const add = await addToFavourite(id)

    if (!add) {
        res.sendStatus(NOT_FOUND)

        return
    }

    res.status(OK).send(add)
}

module.exports = {
    getAllFavouriteController,
    deleteFavouriteController,
    addToFavouriteController,
}