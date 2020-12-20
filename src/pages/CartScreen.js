import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { Button, Col, Divider, Row } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div>
            <Navbar />
            <div id="shopping-cart">
                <Row >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <h1>Shopping Cart</h1>
                        <Divider />
                        {cartItems.length === 0 ?

                            <MessageBox><strong className="error">Cart is empty.</strong><br /><br />
                                <div className="col-button-center">
                                    <Link to='/' className="Button button-white">Go Shopping</Link>
                                </div>
                            </MessageBox>
                            :
                            (
                                <>
                                    <table className="table-shop" align="center" >
                                        <thead>
                                            <tr>
                                                <th className="text-left">Item</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.product} className="cart-shop">
                                                    <td className="text-left">
                                                        <Link to={`/product/${item.product}`} ><img src={item.image} alt={item.name} width={150} className="img-item"></img></Link>
                                                        <Link to={`/product/${item.product}`} >{item.name}</Link>

                                                    </td>

                                                    <td><select className="quantity-select" value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))
                                                    } >
                                                        {
                                                            [...Array(item.countInStock).keys()].map(x => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))
                                                        }
                                                    </select></td>
                                                    <td>
                                                        ${item.price}
                                                    </td>
                                                    <td>
                                                        <Button type='danger' onClick={() => removeFromCartHandler(item.product)} >Delete</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                            )
                        }

                        <div>
                        </div>
                    </Col>
                </Row>
                <Row className="row-total-price">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}></Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}></Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="total-price-box">
                            <div className="total-title">
                                <p>Sub-Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items):</p>
                            </div>
                            <div className="total-text">
                                <p>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                            </div>
                            <div className="total-title">
                                <p>Delivery </p>
                            </div>
                            <div className="total-text">
                                <p>$0</p>
                            </div>
                            <div className="total-title">
                                <strong>Total </strong>
                            </div>
                            <div className="total-text">
                                <p>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                            </div>
                        </div>
                        <div className="proceed-to-checkout">
                            <Button onClick={checkoutHandler} disabled={cartItems.length === 0} >Proceed to Checkout</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    );
}