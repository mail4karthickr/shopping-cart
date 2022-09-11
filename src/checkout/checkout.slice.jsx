import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/service';

const initialState = {
    selectedCard: {},
    defaultAddress: {},
    cards: [],
    addresses: [],
    isLoading: false
}

const url = 'https://fakestoreapi.com';

export const getAddresses = createAsyncThunk(
    'user/addresses',
    async (productName, thunkAPI) => {
        try {
            const fullUrl = url.concat(`/user/addresses`);
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
    reducers: {
        setDefaultAddress: (state, { payload }) => {
            state.defaultAddress = payload.defaultAddress;
        }
    },
    extraReducers: {
        [getAddresses.pending]: (state) => {
            state.isLoading = true;
        },
        [getAddresses.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.addresses = action.payload;
        },
        [getAddresses.rejected]: (state, action) => {
            state.isLoading = false
            state.addresses = []
        }
    },
});

export default checkOutSlice.reducer;
