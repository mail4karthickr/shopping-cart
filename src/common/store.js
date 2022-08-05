import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "../categories/categories.slice";
import productsListReducer from '../products-list/products-list.slice';
import cartReducer from '../cart/cart.slice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        productsList: productsListReducer,
        cart: cartReducer
    }
});