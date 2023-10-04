import { createSlice } from "@reduxjs/toolkit";

const display = createSlice({
    name: "displaySlice",
    initialState: "home",
    reducers: {
        employeeData: (state, action) => {
            return action.payload;
        },
        addEmpPage: (state, action) => {
            return action.payload;
        },
        updateEmployee: (state, action) => {
            return action.payload;
        }
    },
})

export const { employeeData, addEmpPage, updateEmployee } = display.actions;

export default display.reducer;