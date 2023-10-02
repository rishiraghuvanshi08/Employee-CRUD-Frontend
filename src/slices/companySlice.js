import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanies = createAsyncThunk("companies", async () => {
    const response = await axios.get('http://localhost:8080/company/getComp')
    return response.data;
})

export const companySlice = createSlice({
    name: "companySlice",
    initialState: {
        companies: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [getCompanies.pending]: (state) => {
            state.loading = true;
        },
        [getCompanies.fulfilled]: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        [getCompanies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default companySlice.reducer;

