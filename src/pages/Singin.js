import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { Col, Row } from 'antd';
import Footer from '../components/Footer';

export default function SigninScreen(props) {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const redirect = props.location.search ?
    props.location.search.split('=')[1] : '/';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <Navbar />
      <Row justify="center">
        <Col xs={24} sm={24} md={15} lg={8} xl={8}>
          <form className="form login-form" onSubmit={submitHandler}>
            <div>
              <h1>Sign in to your account</h1><br />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email address (required)"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password (required)"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary Button button-blue" type="submit">
                Sign In
          </button>
            </div>
            <div>
              <label />
              <div>
                Don't have an account?
          <br /><br />
                <Link to={`/register?redirect=${redirect}`} ><button className="Button button-white">Create account</button></Link>
              </div>
            </div>
          </form>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}