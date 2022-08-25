import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showLoader: false
}

const appSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        showLoader:(state, action) => {
            const isLoading = action.payload;
            state.showLoader = isLoading
        }
    },
});

export const { showLoader } = appSlice.actions;
export default appSlice.reducer;