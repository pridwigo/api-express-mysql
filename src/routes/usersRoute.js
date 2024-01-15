const express = require('express');

const UsersControllers = require('../controllers/userController')

const router = express.Router();

// CREATE - POST
router.post('/', UsersControllers.createNewUser);

// READ - GET
router.get('/', UsersControllers.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UsersControllers.updateUser);

// DELETE - DELETE
router.delete('/:idUser', UsersControllers.deleteUser);

module.exports = router;