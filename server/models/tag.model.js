const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Projects",
    },
  ],
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
