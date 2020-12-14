import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd'
import React, { Component } from 'react'
import Logo from '../Images/Logo/logo.png';
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Row style={{ width: '100%' }}>
                    <Col span={20}>
                        <Row>
                            <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                <div className="logo">
                                    <a href=''><img src={Logo} alt="Logo" /></a>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Text>About Us</Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Text>Contact Us</Text>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                <div className="twitter_icon">
                                    <Link to=''><FontAwesomeIcon icon={faTwitter} size='2x' /></Link>
                                </div>
                            </Col>
                            <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                <div className="twitter_icon">
                                    <Link to=''><FontAwesomeIcon icon={faFacebookF} size='2x' /></Link>
                                </div>
                            </Col>
                            <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                <div className="twitter_icon">
                                    <Link to=''><FontAwesomeIcon icon={faYoutube} size='2x' /></Link>
                                </div>
                            </Col>
                            <Col className="left-top" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                <div className="twitter_icon">
                                    <Text>Phone Number: XXXXXXXX</Text>
                                    <Text>Email: info@domain.com</Text>
                                    <br></br>
                                    <Text>Address: XXXXX XXXXXXX XXXx</Text>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{width:'100%'}}>
                    <div className='copyright'>
                        <Text>Copyright <FontAwesomeIcon icon={faCopyright} size='2x' />2020</Text>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Footer
