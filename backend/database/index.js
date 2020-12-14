require('dotenv').config();


const db = require('./models');
const express = require('express');
const app = express();
const cors = require('cors');

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');
const shippingRouter = require('./routes/shippingRouter');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/shipping', shippingRouter);

db.sequelize.sync({force: false}).then(() => {
    app.listen(8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
});