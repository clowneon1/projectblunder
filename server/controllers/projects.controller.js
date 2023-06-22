const Project = require("../models/project.model");
const mongoose = require("mongoose");
const errorController = require("./error.controller");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      await Project.find()
        .populate("contributors thumbnails technologies")
        .then((result) => {
          res.status(200).json(result);
        });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },

  getProjectById: async (req, res, next) => {
    try {
      await Project.findById(req.params.id)
        .populate("contributors thumbnails technologies")
        .then((result) => {
          res.status(200).json(result);
        });
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(errorController.createError(400, "Invalid Project Id"));
      }
      next(err);
    }
  },

  createProject: async (req, res, next) => {
    try {
      const project = new Project({
        title: req.body.title,
        description: req.body.description,
        contributors: req.body.contributors,
        url: req.body.url,
        thumbnails: req.body.thumbnails,
        technologies: req.body.technologies,
      });

      await project.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
