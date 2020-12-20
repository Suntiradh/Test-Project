const db = require('../models');

const addOrderList = async (req, res) => {
  if (req.body.paymentMethod.length === 0) {
    res.status(400).send({ message: 'Cart is empty' });
  } else {
    const order = new db.Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user_id: req.body.user.id
    });
    const createdOrder = await order.save();
    res.status(201).send({ message: 'New Order Created', order: createdOrder });
  }
}

const getOrderList = async (req, res) => {
  const targetId = req.params.id;
    const order = await db.Order.findOne({ where: { id: targetId } });
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  };


 const getUserOrder = async (req, res) => {
      const orders = await db.Order.findAll({ user_id: req.params.id });
      res.send(orders);
    };


  const updateOrder = (async (req, res) => {
    const targetId = req.params.id;
    const order = await db.Order.findOne({ where: { id: targetId } });
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  });

module.exports = {
  addOrderList,
  getOrderList,
  updateOrder,
  getUserOrder
};
