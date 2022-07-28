import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "../categories/categories.slice";
import productsListReducer from '../products-list/products-list.slice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        productsList: productsListReducer
    }
});