import {createSlice} from '@reduxjs/toolkit';

export const WishSlice = createSlice ({
    name: "wish",
    initialState:[],
    reducers:{
        addWish: (state,action) => {
            state.push(action.payload); 
        },
        removeWish: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const {addWish, removeWish} = WishSlice.actions;
export default WishSlice.reducer;