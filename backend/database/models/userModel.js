module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User', {
        username: {
            type: DataTypes.STRING(200),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        name: {
            type: DataTypes.STRING(100)
        },
        isAdmin: {
            type: DataTypes.BOOLEAN(0)
        }
        ,
    }, {
        tableName: 'users'
    });

    model.associate = models => {
        model.hasMany(models.Product, { foreignKey: 'user_id' });
        //model.hasMany(models.Order, { foreignKey: 'user_id' });
    };

    return model;
}