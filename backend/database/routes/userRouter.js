const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuth } = require('../utilities');

router.post('/register', userController.registerUser);
router.post('/signin', userController.signinUser);
router.get('/get', userController.getUserList);
router.get('/:id', userController.getUserProfile);
router.put('/profile', isAuth, userController.updateProfile);


module.exports = router;