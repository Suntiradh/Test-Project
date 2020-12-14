import React from 'react';
import Logo from '../Images/Logo/logo.png';
import { faCaretDown, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';



const { Search } = Input;
const onSearch = value => console.log(value);

export default function Navbar() {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout())
    }

    return (
        <div id="header">
            <Row>
                <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <div className="logo">
                        <Link to=''><img src={Logo} alt="Logo" /></Link>
                    </div>
                </Col>
                <Col className="main-menu" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <Link id='home-screen' to='/'>Home</Link>
                    <Link id="shop" to="/shop">Shop</Link>
                    <Link id="contact" to="/contact">Contact Us</Link>
                </Col>
                <Col className="right-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <div className="in-right">
                        <div className="search">
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </div>
                        <div className="cart">
                            {cartItems.length > 0 && (
                                <span>{cartItems.length}</span>
                            )}
                            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} size='2x' /></Link>
                        </div>
                        <div className="member-login">
                            <FontAwesomeIcon icon={faUserCircle} size='2x' /><br />
                            {
                                userInfo ? (
                                    <div>
                                        <Link to='#'>Hello! {userInfo.name}<FontAwesomeIcon icon={faCaretDown} size='2x' /></Link>
                                        <ul>
                                            <Link to='#sigout' onClick={signoutHandler}>Signout</Link>
                                        </ul>
                                    </div>
                                ) :
                                    (
                                        <Link to='/signin'><Text strong>Signin</Text></Link>
                                    )
                            }
                            <Link to='/register'><Text strong> Register</Text></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

