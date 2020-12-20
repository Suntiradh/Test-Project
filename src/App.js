import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './pages/CartScreen';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import RegisterScreen from './pages/RegisterScreen';
import ShippingAddressScreen from './pages/ShippingAddressScreen';
import SigninScreen from './pages/Singin';
import PaymentScreen from './pages/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderScreen from './pages/OrderScreen';
import ProfileScreen from './pages/ProfileScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen';
import DashboardScreen from './pages/crud/DashboardScreen'
import ContactScreen from './pages/ContactScreen';
import AdminRoute from './components/AdminRoute';





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
      <Route path={"/order/:id"} component={OrderScreen}></Route>
      <Route path={"/order_history"} component={OrderHistoryScreen}></Route>
      <Route path={"/contact"} component={ContactScreen}></Route>
      <PrivateRoute
        path="/profile"
        component={ProfileScreen}
      ></PrivateRoute>
      <AdminRoute
        path="/dashboard"
        component={DashboardScreen} >
      </AdminRoute>
    </div>
  );
}

export default App;