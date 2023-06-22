const express = require("express");
const router = express.Router();
const aboutMeController = require("../controllers/about-me.controller");

//get
router.get("/", aboutMeController.getAboutMe);
router.get("/:id", aboutMeController.getAboutMeById);

//post
router.post("/", aboutMeController.createAboutMe);

module.exports = router;
