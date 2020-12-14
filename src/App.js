import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CartScreen from './pages/CartScreen';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import RegisterScreen from './pages/RegisterScreen';
import ShippingAddressScreen from './pages/ShippingAddressScreen';
import SigninScreen from './pages/Singin';
import PaymentScreen from './pages/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';




function App() {
  return (
    <div className="App">
      <Route path={"/"} component={HomeScreen} exact ></Route>
      <Route path={"/product/:id"} component={ProductScreen} ></Route>
      <Route path={"/cart/:id?"} component={CartScreen} ></Route>
      <Route path={"/signin"} component={SigninScreen} ></Route>
      <Route path={"/register"} component={RegisterScreen} ></Route>
      <Route path={"/shipping"} component={ShippingAddressScreen} ></Route>
      <Route path={"/payment"} component={PaymentScreen}></Route>
      <Route path={"/place_order"} component={PlaceOrderScreen}></Route>
    </div>
  );
}

export default App;