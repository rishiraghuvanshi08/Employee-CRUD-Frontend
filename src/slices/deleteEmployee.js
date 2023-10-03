import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteEmployee = createAsyncThunk("delete/employee", async ( employeeId , { rejectWithValue }) => {
    try {
        console.log(employeeId)
        const response = await axios.delete(`http://localhost:8080/company/deleteEmp/${employeeId}`);
        return response.data;
    } catch(error) {
        return rejectWithValue(error.response.data)
    }
});

const deleteEmployeeSlice = createSlice({
    name: "deleteEmp",
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: {
        [deleteEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteEmployee.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [deleteEmployee.rejected]: (state, action) => {
            state.error = true;
        },
    },
})

export default deleteEmployeeSlice.reducer;