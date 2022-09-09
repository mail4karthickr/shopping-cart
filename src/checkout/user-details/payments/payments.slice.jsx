import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../../api/api";

const initialState = {
    paymentInfo: {},
    cards: [],
    isLoading: false,
    defaultCard: {}
}

export const getPaymentInfo = createAsyncThunk(
    'user/paymentInfo',
    async (productName, thunkAPI) => {
        try {
            const resp = await api('/user/paymentInfo');
            return resp.data;
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const paymentsSlice = createSlice({
    name: 'payments',
    initialState: initialState,
    reducers: {
        removeDefaultCard: (state) => {
            state.defaultCard = {};
        },
        updateDefaultCard: (state, action) => {
            const card = action.payload.card;
            state.defaultCard = card;
        }
    },
    extraReducers: {
        [getPaymentInfo.pending]: (state) => {
            state.isLoading = true;
        },
        [getPaymentInfo.fulfilled]: (state, action) => {
            state.isLoading = false;
            const paymentInfo = action.payload;
            state.paymentInfo = paymentInfo
            state.cards = paymentInfo.cards;
            state.defaultCard = paymentInfo.cards.find((card) => card.isDefault);
        },
        [getPaymentInfo.rejected]: (state, action) => {
            state.isLoading = false
            state.paymentInfo = {}
            state.cards = []
        }
    },
});

export default paymentsSlice.reducer;
export const { removeDefaultCard, updateDefaultCard } = paymentsSlice.actions;