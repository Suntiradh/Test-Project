const db = require('../models');

const addOrderList = async (req, res) => {
      if (req.body.paymentMethod.length === 0)  {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const order = new db.Order({
          paymentMethod: req.body.paymentMethod,
          itemsPrice: req.body.itemsPrice,
          shippingPrice: req.body.shippingPrice,
          taxPrice: req.body.taxPrice,
          totalPrice: req.body.totalPrice,
          user: req.user.id,
        });
        const address = new db.Shipping({
          fullName: req.body.fullName,
          address: req.body.address,
          itemsPrice: req.body.itemsPrice,
          city: req.body.city,
          postalCode: req.body.postalCode,
          country: req.body.country,
          user: req.user.id,
        });
        const createdOrder = await order.save();
        const createdAddress = await address.save();
        res.status(201).send(createdOrder, createdAddress);////
      }
    }

    module.exports = {
        addOrderList,
    };
