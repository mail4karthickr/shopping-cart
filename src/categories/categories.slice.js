import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/api';

export const getCategories = createAsyncThunk(
    '/products/categories', 
    async (name, thunkAPI) => {
        try {
            const resp = await axios.get('/products/categories');
            console.log('GetCategories API response - ', resp.data);
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
