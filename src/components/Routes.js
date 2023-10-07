// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from './Login';
import Cart from './Cart';
// import shopData from '../Data';
import Footer from './Footer';

const RoutesConfig = ({shopdata}) => {

// const [shopdata , setShopData] = useState(shopData);
 
  return (
    <Router>
      <div>
          <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop shopdata={shopdata} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<div>Not Found!!</div>} />
      </Routes>
      <Footer />
    </Router> 
  );
}

export default RoutesConfig;
