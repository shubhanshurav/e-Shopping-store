// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import CartPage from './CartPage';

function RoutesConfig() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesConfig;
