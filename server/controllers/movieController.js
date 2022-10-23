const { User, Movie, Cast, Genre } = require("../models");

class movieController {
  static async readAllMovies(req, res, next) {
    try {
      const data = await Movie.findAll({
        include: [
          { model: User, attributes: ["email"] },
          { model: Cast, attributes: ["name", "profilePict"] },
          { model: Genre, attributes: ["name"] },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async readOneMovieBySlug(req, res, next) {
    try {
      const { slug } = req.query;
      console.log(req.query, "INI QUERYYYYYY");
      const data = await Movie.findOne({
        where: {
          slug,
        },
        include: [Genre, Cast],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async readOneMovieById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Movie.findOne({
        where: {
          id,
        },
        include: [Genre, Cast],
      });
      if (!data) {
        throw {
          code: 404,
          name: "Movie not found",
        };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = movieController;
