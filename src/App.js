import React, { useState } from "react";
import "./style/index.css";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import shopData from "./Data"


const App = () => {


const [shopdata , setShopData] = useState(shopData);

  return(
    <div>
       {/* <HomePage /> */}
       <Shop shopdata = {shopdata} />
       {/* <About />
       <Contact /> */}
    </div>
  );
};

export default App;
