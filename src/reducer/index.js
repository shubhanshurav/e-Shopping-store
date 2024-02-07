import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
// import cartReducer from "../slices/cartSlice"
import profileReducer from "../slices/profileSlice"

import { CartSlice } from '../redux/Slices/CartSlice';
import { WishSlice } from '../redux/Slices/WishSlice';
import { CartSliceForCard } from '../redux/Slices/CartSliceForCard';


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  // cart: cartReducer,
  cart: CartSlice.reducer,
  wish: WishSlice.reducer,
  cartCard: CartSliceForCard.reducer,
})

export default rootReducer
