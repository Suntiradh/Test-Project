module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Shipping', {
        fullName: { type: DataTypes.STRING(255) },
        address: { type: DataTypes.STRING(255) },
        city: { type: DataTypes.STRING(255) },
        postalCode: { type: DataTypes.STRING(255) },
        country: { type: DataTypes.STRING(255) },
    },{
        tableName: 'shippings',
        timestamps: false
    });

    model.associate = models => {
        model.belongsTo(models.Order, { foreignKey: 'order_id' });
    }
    return model;
}