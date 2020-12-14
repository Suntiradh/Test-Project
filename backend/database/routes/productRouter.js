const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');


router.get('/', productControllers.getProductList);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.addProductList);

module.exports = router;