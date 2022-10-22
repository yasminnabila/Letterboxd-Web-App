const router = require("express").Router();
const session = require("./session");
const movies = require("./movie");
const ErrorHandler = require("../middlewares/ErrorHandler");
const { Authentication } = require("../middlewares/Authz");

router.use("/", session);
router.use(Authentication);
router.use("/movies", movies);
router.use(ErrorHandler);

module.exports = router;
