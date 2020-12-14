const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register', userController.registerUser);
router.post('/signin', userController.signinUser);
router.get('/get', userController.getUserList);


module.exports = router;