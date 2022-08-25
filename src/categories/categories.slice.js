import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

const url = 'https://fakestoreapi.com';

export const getCategories = createAsyncThunk(
    '/products/categories', 
    async (name, thunkAPI) => {
        try {
            console.log('GetCategories', name);
            const fullUrl = url.concat('/products/categories');
            const resp = await api(fullUrl);
            return resp.data;
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const initialState = {
    items: [],
    isLoading: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.isLoading = false;
            state.items = [];
        },
    },
});

export default categoriesSlice.reducer;
