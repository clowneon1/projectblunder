const Thumbnail = require("../models/thumbnail.model");
const mongoose = require("mongoose");
const errorController = require("./error.controller");

module.exports = {
  getThumbnailById: async (req, res, next) => {
    try {
      await Thumbnail.findById(req.params.id).then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(errorController.createError(400, "Invalid Thumbnail Id"));
      }
      next(err);
    }
  },

  createThumbnail: async (req, res, next) => {
    try {
      const thumbnail = new Thumbnail({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
      });
      await thumbnail.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },
};
