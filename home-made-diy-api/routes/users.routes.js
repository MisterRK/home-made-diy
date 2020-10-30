const { Router } = require('express')
const usersController = require('../controllers/users.controller')
const router = Router()

// no need to include /api/users in the routes below.abs
// we already used that to get into this Router
router.get('/', usersController.getAllUsers)
router.post('/', usersController.createUser)
router.get('/:id', usersController.getUserById)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)


module.exports = router