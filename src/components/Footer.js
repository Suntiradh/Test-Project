import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd'
import React, { Component } from 'react'
import Logo from '../Images/Logo/logo_transparent.png';
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="widget">
                    <Row>
                        <Col className="footer-left" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                            <div className="logo">
                                <a href=''><img src={Logo} alt="Logo" /></a>
                            </div>
                            <div className="social-icons">
                                <div className="twitter-icon">
                                    <Link to=''><FontAwesomeIcon icon={faTwitter} size='2x' /></Link>
                                </div>

                                <div className="facebook-icon">
                                    <Link to=''><FontAwesomeIcon icon={faFacebookF} size='2x' /></Link>
                                </div>

                                <div className="youtube-icon">
                                    <Link to=''><FontAwesomeIcon icon={faYoutube} size='2x' /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col className="footer-middle" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                            <div className="about-us text-left">
                                <h3 className="title">About Us</h3>
                                <p>
                                In this difficult and uncertain time, Motor Bike Shop remains committed to serving the rider and the riding community while continuing to act responsibly to ensure the safety of our customers and employees. We know many of you are commuting as a part of essential services and jobs while others are practicing safe social distancing on a solo ride. 
                            </p>
                            </div>
                        </Col>
                        <Col className="footer-right" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                            <div className="contact-us text-left">
                                <h3 className="title">Contact Us</h3>
                                <div className="contact-detail">
                                    <Text>Phone Number: 02-14115234</Text><br></br>
                                    <Text>Email: Motor-Bike-Shop@domain.com</Text>
                                    <br></br>
                                    <Text>Address: 199/9 Wakanda Codecamp</Text>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id='copyright'>
                    <Row>
                        <div className="copyright-text">
                            <Text>Copyright <FontAwesomeIcon icon={faCopyright} size='2x' /> 2020</Text>
                        </div>
                    </Row>
                </div>
            </div>

        )
    }
}

export default Footer
