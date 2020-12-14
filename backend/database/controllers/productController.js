const db = require('../models');


const getProductList = async (req, res) => {
    const productList = await db.Product.findAll({});
    res.status(200).send(productList);
};

const getProductById = async (req, res) => {
    const targetId = Number(req.params.id);
    const product = await db.Product.findOne({ where: { id: targetId } });
    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
};

const addProductList = async (req, res) => {
    const newProduct = await db.Product.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        img: req.body.img,
        category: req.body.category,
        quantity: req.body.quantity,
        countInStock: req.params.countInStock,
        user_id: req.user.id
    });
    res.status(201).send(newProduct);
};



module.exports = {
    getProductList,
    addProductList,
    getProductById
};