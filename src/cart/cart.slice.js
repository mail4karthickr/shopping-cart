import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    count: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.item.id === payload.id);
            if (cartItem === undefined) {
                // item dose not exists
                state.cartItems.push({ 
                    item: payload,
                    quantity: 1, 
                    amount: payload.price 
                });
                state.amount = payload.price;
                state.count = state.count + 1;
            } else {
                // item exists. just update the item.
                cartItem.quantity = cartItem.quantity + 1;
                cartItem.amount = cartItem.quantity * cartItem.amount;
                
                state.amount = state.amount + cartItem.amount;
                state.count = state.count + 1;
            }
        }
    }, 
    extraReducers: {}
});

export default cartSlice.reducer;
export const { addToCart }  = cartSlice.actions;