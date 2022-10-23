const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.readAllMovies);

module.exports = router;
