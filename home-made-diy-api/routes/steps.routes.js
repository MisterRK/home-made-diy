const { Router } = require('express')
const stepsController = require('../controllers/steps.controller')
const router = Router();
const upload = require('../config/multer.config')

router.post('/', upload.single('stepImage'), stepsController.createStep)

module.exports = router