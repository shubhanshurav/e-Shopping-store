// src/Routes.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from './Login';
import Cart from './Cart'
import shopData from '../Data';
import data from '../DataCustomer';
import Footer from './Footer';
import ViewDetails from './ViewDetails';
import ForgetPassword from './ForgetPassword';
import Signup from './Signup';
import Checkout from './Checkout';
import WishList from './WishList';
import ErrorPage from './ErrorPage';
import ProductDetails from './ProductDetails';

const RoutesConfig = () => {

const [datacustomer, setDatacustomer] = useState(data);
const [shopdata , setShopData] = useState(shopData);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop shopdata={shopdata} />} />
        <Route path="/Shop/ViewDetail/:id" element={<ViewDetails />}/>
        <Route path="/Shop/productDetails/:id" element={<ProductDetails />}/>
        <Route path="/About" element={<About datacustomer={datacustomer}/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router> 
  );
}

export default RoutesConfig;
