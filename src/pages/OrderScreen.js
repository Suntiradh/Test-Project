import { Col, Row, Divider } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PayPalButton } from 'react-paypal-button-v2';
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const [sdkReady, setSdkReady] = useState(false);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order.id != orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay]);


  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
        <div>
          <Navbar />
          <div id="order">
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h1>Order No. {order.id}</h1>
                <Divider />
                <Row>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
                    <div className="shipping">
                      <h2>Shipping</h2>
                      <p>
                        <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                        <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                        {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                      </p>
                      {order.isDelivered ? (
                        <MessageBox variant="success">
                          Delivered at {order.deliveredAt}
                        </MessageBox>
                      ) : (
                          <MessageBox variant="danger">Not Delivered</MessageBox>
                        )}
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
                    <div className="payment">
                      <h2>Payment</h2>
                      <p>
                        <strong>Method:</strong> {order.paymentMethod}
                      </p>
                      {order.isPaid ? (
                        <MessageBox variant="success">
                          Paid at {order.paidAt}
                        </MessageBox>
                      ) : (
                          <MessageBox variant="danger">Not Paid</MessageBox>
                        )}
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-left">
                    <div className="your-product">
                      <h2>Order Items</h2>
                      {order.orderItems.map((item) => (
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
                      <h2>Order Summary</h2>
                      <div>
                        <strong>Items: </strong>${order.itemsPrice.toFixed(2)}
                      </div>
                      <div>
                        <strong>Shipping: </strong>${order.shippingPrice.toFixed(2)}
                      </div>
                      <div>
                        <strong>Tax: </strong>${order.taxPrice.toFixed(2)}
                      </div>
                      <div>
                        <strong> Order Total :</strong> <strong className="totalPrice"><u>${order.totalPrice.toFixed(2)}</u></strong>
                      </div>
                      <br />
                      {order.paymentMethod !== "PayPal" && !order.isPaid && (
                        <div>
                          <p> Transfer money to my account no. 000-000-000  </p>
                          <p>Ready to attach the proof of tranfer to email : Motor-Bike-Shop@domain.com</p>
                        </div>
                      )}
                      {order.paymentMethod !== "Stripe" && !order.isPaid && (

                        <div>
                          {!sdkReady ? (
                            <LoadingBox></LoadingBox>
                          ) : (
                              <>
                                {errorPay && (
                                  <MessageBox variant="danger">{errorPay}</MessageBox>
                                )}
                                {loadingPay && <LoadingBox></LoadingBox>}

                                <PayPalButton
                                  amount={order.totalPrice}
                                  onSuccess={successPaymentHandler}
                                ></PayPalButton>
                              </>
                            )}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <br /> <br />
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="col-button-center">
                      <Link to="/" className="Button button-white">Go to shop</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Footer />
        </div >
      );
}