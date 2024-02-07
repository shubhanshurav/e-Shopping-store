// src/Routes.js
import React from 'react';
import { useState,useEffect } from 'react';
import { Route, Routes , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cart from './Cart'
import shopData from '../Data';
import data from '../DataCustomer';
import Footer from './Footer';
import ViewDetails from './ViewDetails';
import Checkout from './Checkout';
import WishList from './WishList';
import ErrorPage from './ErrorPage';
import ProductDetails from './ProductDetails';

import ForgotPassword from "../pages/ForgotPassword"
import OpenRoute from "./Auth/OpenRoute"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Admin from "../pages/Admin"
import Settings from "./User/Settings"
import MyProfile from "./User/MyProfile"
import Dashboard from "./User/Dashboard"
import PrivateRoute from "../components/Auth/PrivateRoute"
import UpdatePassword from "../pages/UpdatePassword"
import VerifyEmail from "../pages/VerifyEmail"
import { getUserDetails } from "../services/operations/profileAPI"
import { ACCOUNT_TYPE } from "../utils/constants"


const RoutesConfig = () => {

const [datacustomer, setDatacustomer] = useState(data);
const [shopdata , setShopData] = useState(shopData);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { user } = useSelector((state) => state.profile)
  const { user } = useSelector((state) => state.profile || { user: null });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop shopdata={shopdata} />} />
        <Route path="/Shop/viewDetail/:id" element={<ViewDetails />}/>
        <Route path="/Shop/productDetails/:id" element={<ProductDetails />}/>
        <Route path="/About" element={<About datacustomer={datacustomer}/>}/>
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Route path="/WishList" element={<WishList />} /> */}
        {/* <Route path="/Signup" element={<Signup/>}/> */}
        {/* <Route path="/Checkout" element={<Checkout />} /> */}
        <Route path="*" element={<ErrorPage />} />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/admin" element={<Admin />} />
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/my-profile"
                element={<MyProfile />}
              />
              <Route
                path="dashboard/cart"
                element={<Cart />}
              />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="dashboard/wishlist" element={<WishList />} />
              {/* <Route path="/Shop/ViewDetail/:id" element={<ViewDetails />}/> */}
              {/* <Route path="/Shop/productDetails/:id" element={<ProductDetails />}/> */}
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </div> 
  );
}

export default RoutesConfig;
