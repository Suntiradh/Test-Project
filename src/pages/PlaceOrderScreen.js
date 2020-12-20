import { Col, Row, Divider } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import Checkout from '../components/Checkout';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems, user: JSON.parse(localStorage.getItem('userInfo')) }));
  };
  useEffect(() => {
    if (success) {      
      props.history.push(`/order/${order.id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div id="place-order">
      <Navbar />
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Checkout step1 step2 step3 step4></Checkout>
          <Divider />
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
              <div className="shipping">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
              <div className="payment">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
              <div className="your-product">
                <h2>Your Product</h2>
                {cart.cartItems.map((item) => (
                  <div key={item.product}>
                    <div className="row">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-product2"
                        ></img>
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>
                      <div>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
              <div className="order-summary">
                <div>
                  <h2>Order Summary</h2>
                  <div >
                    <strong>Items: </strong> ${cart.itemsPrice.toFixed(2)}
                  </div>
                  <div>
                    <strong>Shipping: </strong> ${cart.shippingPrice.toFixed(2)}
                  </div>
                  <div>
                    <strong>Tax: </strong> ${cart.taxPrice.toFixed(2)}
                  </div>
                  <div>
                    <strong> Order Total: </strong>  <strong className="totalPrice"><u>${cart.totalPrice.toFixed(2)}</u></strong>
                  </div>
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                </div>
              </div>
            </Col>
          </Row>
          <br /><br /><br /><br />
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="col-button-center">
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block Button button-blue"
                  disabled={cart.cartItems.length === 0}
                > Confirm Order
                </button>
              </div>
              <div className="col-button-center">
                <Link to="/payment" className="Button button-white">Back</Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}