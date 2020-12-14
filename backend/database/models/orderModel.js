module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Order', {
        name: {type: DataTypes.STRING(255)},
        price: {type: DataTypes.INTEGER},
        img: {type: DataTypes.STRING(255)},
        qty: {type: DataTypes.INTEGER},
        paymentMethod: { type: DataTypes.STRING(255) },
        itemsPrice: { type: DataTypes.INTEGER },
        shippingPrice: { type: DataTypes.INTEGER },
        totalPrice: { type: DataTypes.INTEGER },
        isPaid: { type: DataTypes.BOOLEAN(0) },
        paidAt: { type: DataTypes.DATE },
        isDelivered: { type: DataTypes.BOOLEAN(0) },
        deliveredAt: { type: DataTypes.DATE }
    },
      {
        tableName: 'orders'
      }
  )

  model.associate = models => {
      model.belongsTo(models.User, { foreignKey: 'user_id' });
      model.belongsTo(models.Product, { foreignKey: 'product_id' });
      model.hasOne(models.Shipping, { foreignKey: 'order_id' });
  }
  return model;
}