import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
// import { store } from './redux/Store';
import "./style/index.css";
import App from './App';
import { Toaster } from 'react-hot-toast';
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
);

 