module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Order', {
    orderItems: {
      type: DataTypes.TEXT(),
      get: function () {
        return JSON.parse(this.getDataValue('orderItems'));
      },
      set: function (val) {
        return this.setDataValue('orderItems', JSON.stringify(val));
      }
    },
    shippingAddress: {
      type: DataTypes.TEXT(),
      get: function () {
        return JSON.parse(this.getDataValue('shippingAddress'));
      },
      set: function (val) {
        return this.setDataValue('shippingAddress', JSON.stringify(val));
      }
    },
    paymentResult: {
      type: DataTypes.TEXT(),
      get: function () {
        return this.getDataValue('paymentResult') ? JSON.parse(this.getDataValue('paymentResult')): []
      },
      set: function (val) {
        return this.setDataValue('paymentResult', JSON.stringify(val));
      }
    },
    paymentMethod: { type: DataTypes.STRING(255) },
    itemsPrice: { type: DataTypes.INTEGER },
    shippingPrice: { type: DataTypes.INTEGER },
    totalPrice: { type: DataTypes.INTEGER },
    taxPrice: { type: DataTypes.INTEGER },
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
  }
  return model;
}