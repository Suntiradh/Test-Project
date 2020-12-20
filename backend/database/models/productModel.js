module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Product', {
        title: {
            type: DataTypes.STRING(255)
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING(255)
        },
        img: {
            type: DataTypes.STRING(255)
        },
        countInStock: {
            type: DataTypes.INTEGER
        },
        category: {
            type: DataTypes.STRING(255)
        }
    },{
        tableName: 'products',
        timestamps: false
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: 'user_id' });
        model.hasMany(models.Order, { foreignKey: 'product_id' });
    }
    return model;
}