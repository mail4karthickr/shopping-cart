import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showLoader: false
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {}
});

export default navigationSlice.reducer;