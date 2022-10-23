const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.readAllMovies);
router.get("/detail", movieController.readOneMovie)

module.exports = router;
