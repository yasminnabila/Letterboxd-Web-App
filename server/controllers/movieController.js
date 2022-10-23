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
}

module.exports = movieController;
