const mongoose = require("mongoose");

const aboutMeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  profileImageUrl: {
    type: String,
  },

  socials: [
    {
      platform: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const AboutMe = mongoose.model("AboutMe", aboutMeSchema);

module.exports = AboutMe;
