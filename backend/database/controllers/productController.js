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
        countInStock: req.body.countInStock,
        user_id: req.body.user.id
    });
    res.status(201).send(newProduct);
};

const deleteProductList = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetProduct = await db.Product.findOne({ where: { id: targetId } });
    if (targetProduct) {
        await targetProduct.destroy();
        res.status(204).send();
    } else (
        res.status(404).send({ message: "Product list not found." })
    )
};

const updateProductList = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetProduct = await db.Product.findOne({ where: { id: targetId } });
    if (targetProduct) {
        await targetProduct.update({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            img: req.body.img,
            category: req.body.category,
            countInStock: req.body.countInStock,
            user_id: req.body.user.id
        });
        res.status(200).send({ message: "updating is success" });
    } else {
        res.status(404).send({ message: "Product list not found" });
    }
};

module.exports = {
    getProductList,
    addProductList,
    getProductById,
    deleteProductList,
    updateProductList
};