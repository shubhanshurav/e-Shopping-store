import React from "react";
import "./style/index.css";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return(
    <div>
       <HomePage />
       <Shop />
       <About />
       <Contact />
    </div>
  );
};

export default App;
