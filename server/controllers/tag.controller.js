const Tag = require("../models/tag.model");
const errorController = require("./error.controller");

module.exports = {
  getAllTags: async (req, res, next) => {
    try {
      await Tag.find().then((result) => {
        res.status(200).send(result);
      });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },

  getTagById: async (req, res, next) => {
    const id = req.params.id;
    try {
      await Tag.findById(id).then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(errorController.createError(400, "Invalid Tag Id"));
      }
      next(err);
    }
  },

  createTag: async (req, res, next) => {
    try {
      const tag = new Tag({
        tagName: req.body.tagName,
        projects: [],
      });
      await tag.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  },

  // addProjectId: async (req, res, next) => {
  //   const id = req.id;
  //   try {
  //     const tag = await getTagById(id);
  //     tag.projects.add(req.projectId); //use Single project Id;
  //   } catch (err) {
  //     console.log(err.message);
  //     if (err instanceof mongoose.CastError) {
  //       next(createError(400, "Invalid Tag Id"));
  //     }
  //     next(err);
  //   }
  // },
};
