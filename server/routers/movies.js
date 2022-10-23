const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.readAllMovies);
router.get("/detail", movieController.readOneMovieBySlug);
router.get("/:id", movieController.readOneMovieById);

module.exports = router;
