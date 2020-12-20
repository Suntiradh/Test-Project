import React from 'react';
import { Col, Row } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Map from '../Images//map.jpg';
//import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export default function ContactScreen() {

    return (
        <div>
            <Navbar />
            <div id="contact">
                <div className="main-top-bar">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                            <h1>Contact</h1>

                        </Col>
                    </Row>
                </div>
                <Row justify="center">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="google-map">
                            <img src={Map} alt="Google Map" />

                            {/* <Map className="google-map"
                                google={props.google}
                                zoom={10}
                                initialCenter={{
                                    lat: 13.0495081,
                                    lng: 100.9017939
                                }}
                            >
                                <Marker />
                            </Map>*/}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="text-left">
                        <div className="box-contact">
                            <h2 className="text-contact-us">Contact Us</h2>
                            <div class="contact-detail">
                                <span class="ant-typography">Address: 199/9 Wakanda Codecamp</span><br /> <br />
                                <span class="ant-typography">Phone Number: 02-14115234</span><br />
                                <span class="ant-typography">Email: Motor-Bike-Shop@domain.com</span>

                            </div>
                        </div>

                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )

}
//export default GoogleApiWrapper({
    //apiKey: ('AIzaSyDtLdwKnFaNDxiy629rAZk9bQYgko7NoK8'), version: 3.31
//})(ContactScreen);
