const router = require("express").Router();
const publicController = require("../controllers/publicController");

router.get("/", publicController.readAllMovies);
router.get("/detail", publicController.readOneMovie);

module.exports = router;
