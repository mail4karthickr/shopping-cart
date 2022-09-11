import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/service';

const initialState = {
    // selectedCard: {},
    // selectedAddress: {},
    // cards: [],
    // addresses: [],
    isLoading: false,
    products: []
}

export const getProducts = createAsyncThunk(
    '/category/products', 
    async (productName, thunkAPI) => {
        try {
            const resp = await api(`/products/category/${productName}`);
            return resp.data;
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const productsListSlice = createSlice({
    name: 'productsList',
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

export default productsListSlice.reducer;
