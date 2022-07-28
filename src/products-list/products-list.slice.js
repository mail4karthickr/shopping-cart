import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

const url = 'https://fakestoreapi.com';

export const getProducts = createAsyncThunk(
    '/category/products', 
    async (productName, thunkAPI) => {
        try {
            const fullUrl = url.concat(`/products/category/${productName}`);
            const resp = await api(fullUrl);
            return resp.data;
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const initialState = {
    products: [],
    isProductListLoading: false,
}

const productsSlice = createSlice({
    name: 'productsList',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isProductListLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isProductListLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.isProductListLoading = false
            state.products = [];
        }
    },
});

export default productsSlice.reducer;
