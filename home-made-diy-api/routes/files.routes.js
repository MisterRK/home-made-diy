const express = require('express')
const router = express.Router()
const upload = require('../config/multer.config')

const fileController = require('../controllers/file.controller')

router.post('/', upload.single("photo"), fileController.uploadFile)

router.get('/:id', fileController.downloadFile )

router.get('/', fileController.getAllFiles)

module.exports = router