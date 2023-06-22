const AboutMe = require("../models/about-me.model");
const mongoose = require("mongoose");
const errorController = require("./error.controller");

module.exports = {
  getAboutMe: async (req, res, next) => {
    try {
      await AboutMe.find().then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  getAboutMeById: async (req, res, next) => {
    try {
      await AboutMe.findById(req.params.id).then((result) => {
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(errorController.createError(400, "Invalid AboutMe Id"));
      }
      next(err);
    }
  },
  createAboutMe: async (req, res, next) => {
    try {
      const aboutMe = new AboutMe({
        fullName: req.body.fullName,
        bio: req.body.bio,
        socials: req.body.socials,
        skills: req.body.skills,
        profileImageUrl: req.body.profileImageUrl,
      });
      await aboutMe.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
