const Contributor = require("../models/contributor.model");
const errorController = require("./error.controller");

module.exports = {
  createContributor: async (req, res, next) => {
    try {
      const contributor = new Contributor({
        imageUrl: req.body.imageUrl,
        profileUrl: req.body.profileUrl,
      });
      await contributor.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },

  getAllContributor: async (req, res, next) => {
    try {
      await Contributor.find().then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },

  getContributorById: async (req, res, next) => {
    try {
      await Contributor.findById(req.params.id).then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(errorController.createError(400, "Invalid Contributor Id"));
      }
      next(err);
    }
  },
};
