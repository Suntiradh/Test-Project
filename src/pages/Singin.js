import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import Navbar from '../components/Navbar';

export default function SigninScreen(props) {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const redirect = props.location.search? 
  props.location.search.split('=')[1]:'/';
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  useEffect(() => {
    if(userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}