const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects.controller");

//get
router.get("/", projectController.getAllProducts);
router.get("/:id", projectController.getProjectById);

//post
router.post("/", projectController.createProject);

module.exports = router;
