import React from 'react';
import Logo from '../Images/Logo/logo_transparent.png';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Dropdown, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { DownOutlined } from '@ant-design/icons';



export default function Navbar(props) {
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
        history.push('/')
    }
    const userMenu = (
        <Menu>
            <Menu.Item>
                <Link to="/order_history">Order History</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/profile">User Profile</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='#sigout' onClick={signoutHandler}>Signout</Link>
            </Menu.Item>
        </Menu>
    );
    const adminMenu = (
        <Menu>
            <Menu.Item>
                <Link to='/dashboard'>Dashboard</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div id="header">
            <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4}>
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="Logo" /></Link>
                    </div>
                </Col>
                <Col className="main-menu" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Link id='home-screen' to='/'>Shop</Link>
                    <Link id="contact" to="/contact">Contact Us</Link>
                </Col>
                <Col id="cart" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <div className="cart">
                        {cartItems.length > 0 && (
                            <span className="count-qty">{cartItems.length}</span>
                        )}
                        <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} size='2x' /></Link>
                    </div>
                    <div className="member-login">
                        <div>
                            <FontAwesomeIcon icon={faUserCircle} size='2x' /><br />
                        </div>

                        {
                            userInfo ? (
                                <div>
                                    <Dropdown overlay={userMenu}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            Hello! {userInfo.name} <DownOutlined />
                                        </a>
                                    </Dropdown>
                                </div>
                            ) :
                                (
                                    <Link to='/signin'><Text strong>Signin | </Text></Link>
                                )
                        }
                        {
                            userInfo && userInfo.isAdmin && (
                                <div>
                                    <Dropdown overlay={adminMenu}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            Admin <DownOutlined />
                                        </a>
                                    </Dropdown>
                                </div>
                            )
                        }
                        {
                            userInfo ? (
                                <> </>
                            ) : (
                                    <Link to='/register'><Text strong> Register</Text></Link>
                                )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

