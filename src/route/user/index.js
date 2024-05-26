// routes/proctoringRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controller/user');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

module.exports = router;
