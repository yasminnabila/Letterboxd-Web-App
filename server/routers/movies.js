const router = require("express").Router();
const movieController = require("../controllers/movieController");
const { AuthorizationAdmin } = require("../middlewares/Authz");

router.get("/", movieController.readAllMovies);
router.get("/detail", movieController.readOneMovieBySlug);
router.post("/", movieController.createNewMovie);
router.get("/genres", movieController.readAllGenres);
router.get("/casts", movieController.readAllCasts);
router.get("/:id", movieController.readOneMovieById);
router.put("/:id", AuthorizationAdmin, movieController.updateMovie);

module.exports = router;
