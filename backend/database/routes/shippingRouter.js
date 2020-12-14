const express = require('express');
const router = express.Router();
const shippingControllers = require('../controllers/shippingController');
const {isAuth} = require('../utilities')



router.post('/', isAuth, shippingControllers.addShippingList);

module.exports = router;