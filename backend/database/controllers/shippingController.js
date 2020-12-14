const db = require('../models');

const addShippingList = async (req, res) => {
        const createdShipping = await db.Shipping.create({
            fullName: req.body.fullName,
            address: req.body.address,
            city: req.body.city,
            postalCode: req.body.postalCode,
            country: req.body.country,
            user_id: req.user.id
        });
        res.status(201).send(createdShipping);
    }

    module.exports = {
        addShippingList,
    };
