import { Col, Row, Divider } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/place_order');
  };
  return (
    <div id="payment">
      <Navbar />
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Checkout step1 step2 step3></Checkout>
          <Divider />
          <form className="form payment-method" onSubmit={submitHandler}>
            <h1>Payment Method</h1>
            <br />
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Stripe</label>
            </div>
            <br/>
            <div className="col-button-center">
              <label />
              <button className="primary Button button-blue" type="submit">Continue</button>
            </div>
            <div className="col-button-center">
              <label />
              <Link to={"/shipping"}>
                <button className="primary Button button-white" type="submit">Back</button>
              </Link>
            </div>
          </form>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}