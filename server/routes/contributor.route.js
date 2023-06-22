const express = require("express");
const router = express.Router();
const contributorController = require("../controllers/contributor.controller");

//get
router.get("/", contributorController.getAllContributor);
router.get("/:id", contributorController.getContributorById);

//post
router.post("/", contributorController.createContributor);

module.exports = router;
