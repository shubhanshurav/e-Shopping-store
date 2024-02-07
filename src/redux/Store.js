import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slices/CartSlice';
import { WishSlice } from './Slices/WishSlice';
import { CartSliceForCard } from './Slices/CartSliceForCard';

export const store = configureStore ({
      reducer:{
            cart: CartSlice.reducer,
            wish: WishSlice.reducer,
            cartCard: CartSliceForCard.reducer,
      },
});