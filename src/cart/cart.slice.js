import { createSlice } from '@reduxjs/toolkit';
import IntUtils from '../common/utils/IntUtils';

const initialState = {
    cartItems: [],
    amount: 0,
    count: 0,
    isCartOpen: false,
    formattedAmount: "$0.00"
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen: (state, action) => {
            const isCartOpen = action.payload;
            state.isCartOpen = isCartOpen;
        },
        addToCart: (state, { payload }) => {
            state.cartItems.push({ 
                item: payload,
                quantity: 1, 
                amount: payload.price,
                formattedAmount: IntUtils.toUSD(payload.price)
            });
            const cartPrice = state.cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0);
            const cartQuantity = state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
            state.count = cartQuantity
            state.amount = cartPrice;
            state.formattedAmount = IntUtils.toUSD(cartPrice);
        },
        increase: (state, { payload }) => {
            const item = state.cartItems.find((cartItem) => cartItem.item.id === payload.item.id);
            const newQuantity = payload.quantity + 1;
            const newAmount = newQuantity * payload.item.price;
            item.quantity = newQuantity
            item.amount = newAmount;
            item.formattedAmount = IntUtils.toUSD(newAmount);
            //Cart 
            const cartPrice = state.cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0);
            const cartQuantity = state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
            state.count = cartQuantity
            state.amount = cartPrice;
            state.formattedAmount = IntUtils.toUSD(cartPrice);
        },
        decrease: (state, { payload }) => {
            if (payload.quantity === 1) {
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.item.id !== payload.item.id);
            } else {
                const item = state.cartItems.find((cartItem) => cartItem.item.id === payload.item.id);
                const newQuantity = payload.quantity - 1;
                const newAmount = newQuantity * payload.item.price;
                item.quantity = newQuantity
                item.amount = newAmount;
                item.formattedAmount = IntUtils.toUSD(newAmount);
            } 
            //Cart 
            const cartPrice = state.cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0);
            const cartQuantity = state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
            state.count = cartQuantity
            state.amount = cartPrice;
            state.formattedAmount = IntUtils.toUSD(cartPrice);
        }
    }, 
    extraReducers: {}
});

export default cartSlice.reducer;
export const { addToCart, setIsCartOpen, increase, decrease }  = cartSlice.actions;