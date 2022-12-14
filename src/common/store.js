import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "../categories/categories.slice";
import productsListReducer from '../products-list/products-list.slice';
import cartReducer from '../cart/cart.slice';
import navigationReducer from '../navigation/navigation.slice';
import checkOutReducer from '../checkout/checkout.slice';
import addressesReducer from '../checkout/user-details/addresses/addresses.slice';
import paymentsReducer from '../checkout/user-details/payments/payments.slice.jsx';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        productsList: productsListReducer,
        cart: cartReducer,
        navigation: navigationReducer,
        checkOut: checkOutReducer,
        addresses: addressesReducer,
        payments: paymentsReducer
    }
});