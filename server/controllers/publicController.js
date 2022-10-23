const { User, Movie, Cast, Genre } = require("../models");

class publicController {
  static async readAllMovies(req, res, next) {
    try {
      const data = await Movie.findAll({
        include: [Genre],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async readOneMovie(req, res, next) {
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
}

module.exports = publicController;
