import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "../categories/categories.slice";
import productsListReducer from '../products-list/products-list.slice';
import cartReducer from '../cart/cart.slice';
import navigationReducer from '../navigation/navigation.slice';
import appReducer from '../app/app.slice';
import rootReducer from '../root/root.slice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        productsList: productsListReducer,
        cart: cartReducer,
        navigation: navigationReducer,
        root: rootReducer,
        app: appReducer
    }
});