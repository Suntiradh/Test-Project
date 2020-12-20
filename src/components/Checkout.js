import React from 'react';
import { Col, Row } from 'antd';

export default function Checkout(props) {
  return (
    <div >
      {/*<div className={props.step1 ? 'active' : ''}>Sign-In</div>
      <div className={props.step2 ? 'active' : ''}>Shipping</div>
      <div className={props.step3 ? 'active' : ''}>Payment</div>
      <div className={props.step4 ? 'active' : ''}>Place Order</div>
      */}
    <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="checkout-steps">
          <div className={props.step1 ? 'active' : ''}>Sign-In</div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="checkout-steps">
          <div className={props.step2 ? 'active' : ''}>Shipping</div>

        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="checkout-steps">
          <div className={props.step3 ? 'active' : ''}>Payment</div>

        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="checkout-steps">
          <div className={props.step4 ? 'active' : ''}>Place Order</div>
        </Col>
      </Row>
    
    </div>

    
  );
}