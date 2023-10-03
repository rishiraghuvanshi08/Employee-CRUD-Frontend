import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

// Create an async thunk to add an employee to the database
export const addEmployee = createAsyncThunk(
  'employee/addEmployee',
  async ({ companyId, employeeData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/company/addEmployee/${companyId}`, // Include companyId in the URL
        employeeData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload);
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;