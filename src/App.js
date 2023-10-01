// src/App.js
import React from 'react';
import { useState } from 'react';
import "./style/index.css";
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

import RoutesConfig from './components/Routes';

function App() {



  return (
    <div>
  
      <RoutesConfig />
  
    </div>
  );
}

export default App;
