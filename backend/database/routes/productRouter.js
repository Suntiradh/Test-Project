const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');



router.get('/', productControllers.getProductList);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.addProductList);
router.delete('/:id', productControllers.deleteProductList);
router.put('/:id', productControllers.updateProductList);

module.exports = router;