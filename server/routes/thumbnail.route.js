const express = require("express");
const router = express.Router();
const thumbnailController = require("../controllers/thumbnail.controller");

//get
router.get("/:id", thumbnailController.getThumbnailById);

// post

router.post("/", thumbnailController.createThumbnail);

module.exports = router;
