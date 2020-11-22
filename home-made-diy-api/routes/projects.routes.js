const { Router } = require('express');
const projectsController = require("../controllers/projects.controller");
const router = Router();
const upload = require('../config/multer.config')

router.post('/', upload.single("projectImage"), projectsController.createProject)
router.get('/', projectsController.getAllProjects)
router.get('/:id', projectsController.getProjectById)
router.delete('/:id', projectsController.deleteProjectById)

module.exports = router