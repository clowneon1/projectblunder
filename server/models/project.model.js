const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contributors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contributor",
    },
  ],
  url: {
    type: String,
    required: true,
  },
  thumbnails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thumbnail",
    },
  ],
  technologies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
