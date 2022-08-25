import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

const url = 'https://fakestoreapi.com';

const initialState = {
    selectedCard: {},
    selectedAddress: {},
    cards: [],
    addresses: [],
    isLoading: false
}

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

const checkOutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false
            state.products = [];
        }
    },
});

export default checkOutSlice.reducer;
