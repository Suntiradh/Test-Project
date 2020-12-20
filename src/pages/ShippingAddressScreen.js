import { Col, Row, Divider } from 'antd';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('/signin');
    };
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
        props.history.push('/payment');
    };
    return (
        <div id="shipping">

            <Navbar />
            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Checkout step1 step2></Checkout>
                    <Divider />

                </Col>
                <Col xs={24} sm={24} md={15} lg={8} xl={8}>
                    <form onSubmit={submitHandler} className="shipping-address">
                        <h1>Shipping Address</h1>
                        <br />
                        <div>
                            <input type="text" id="fullName"
                                placeholder="Enter full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required></input>
                        </div>
                        <div>

                            <textarea id="address"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required></textarea>
                        </div>
                        <div>

                            <input type="text" id="city"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <input type="text" id="postalCode"
                                placeholder="Enter postal code"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <input type="text" id="country"
                                placeholder="Enter country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required></input>
                        </div>
                        <div className="col-button-center">
                            <label />
                            <button type='submit' className="Button button-blue">Continue</button>
                        </div>
                    </form>
                </Col>
            </Row>

            <Footer />
        </div>
    );
}