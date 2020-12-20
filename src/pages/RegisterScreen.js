import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import { Col, Row } from 'antd';
import Footer from '../components/Footer';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
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
          <form className="form register-form" onSubmit={submitHandler}>
            <div>
              <h1>Create your account</h1><br />
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <input
                type="text"
                id="name"
                placeholder="First name"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Enter confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary Button button-blue" type="submit">
                Register
          </button>
            </div>
            <div>
              <label />
              <div>
                Already have an account?
                <br /><br />
                <Link to={`/signin?redirect=${redirect}`}><buton className="Button button-white">Sign-In</buton></Link>
              </div>
            </div>
          </form>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}