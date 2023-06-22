const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tag.controller");

//get
router.get("/", tagController.getAllTags);
router.get("/:id", tagController.getTagById);

//post
router.post("/", tagController.createTag);
module.exports = router;
