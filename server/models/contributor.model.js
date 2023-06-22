const mongoose = require("mongoose");

const contributorSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
    required: true,
  },
});

const Contributor = mongoose.model("Contributor", contributorSchema);
module.exports = Contributor;
