import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllData = createAsyncThunk("employees", async () => {
    const response = await axios.get('http://localhost:8080/company/getEmp')
    return response.data;
})

export const employee = createSlice({
    name: "employee",
    initialState: {
        employees: [],
        loading: false,
        error: null,
    },
    // reducers:
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default employee.reducer;