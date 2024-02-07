import {createSlice} from '@reduxjs/toolkit';

export const CartSliceForCard = createSlice ({
    name: "cartCard",
    initialState:[],
    reducers:{
        addCart: (state,action) => {
            state.push(action.payload); 
        },
        removeCart: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const {addCart, removeCart} = CartSliceForCard.actions;
export default CartSliceForCard.reducer;