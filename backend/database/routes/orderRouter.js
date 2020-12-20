const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderController');
const {isAuth} = require('../utilities')



router.post('/', isAuth, orderControllers.addOrderList);
router.get('/mine/:id', isAuth, orderControllers.getUserOrder);
router.get('/:id', isAuth, orderControllers.getOrderList);
router.put('/:id/pay', isAuth, orderControllers.updateOrder);

module.exports = router;