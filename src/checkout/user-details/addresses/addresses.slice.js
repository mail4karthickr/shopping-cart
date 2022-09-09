import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api';

const initialState = {
    defaultAddress: {},
    addresses: [],
    isLoading: false
}

export const getAddresses = createAsyncThunk(
    'user/addresses',
    async (productName, thunkAPI) => {
        try {
            const resp = await api('/addresses');
            return resp.data;
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const addressesSlice = createSlice({
    name: 'addresses',
    initialState,
    reducers: {
        removeDefaultAddress: (state) => {
            state.defaultAddress = {};
        },
        updateDefaultAddress: (state, action) => {
            const address = action.payload.address;
            state.defaultAddress = address;
        }
    },
    extraReducers: {
        [getAddresses.pending]: (state) => {
            state.isLoading = true;
        },
        [getAddresses.fulfilled]: (state, action) => {
            const addresses = action.payload;
            state.addresses = addresses;
            state.defaultAddress = addresses.find((address) => address.isDefault);
            state.isLoading = false;
        },
        [getAddresses.rejected]: (state, action) => {
            state.addresses = []
            state.isLoading = false
        }
    },
});

export default addressesSlice.reducer;
export const { removeDefaultAddress, updateDefaultAddress }  = addressesSlice.actions;