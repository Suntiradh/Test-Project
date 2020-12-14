const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderController');
const {isAuth} = require('../utilities')



router.post('/', isAuth, orderControllers.addOrderList);

module.exports = router;