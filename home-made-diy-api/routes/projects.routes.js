const { Router } = require('express');
const projectsController = require("../controllers/projects.controller");
const router = Router();

router.post('/', projectsController.createProject)
router.get('/', projectsController.getAllProjects)

module.exports = router