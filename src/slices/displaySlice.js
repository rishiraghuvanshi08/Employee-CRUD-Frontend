import { createSlice } from "@reduxjs/toolkit";

const display = createSlice({
    name: "displaySlice",
    initialState: "home",
    reducers: {
        employeeData: (state, action) => {
            return action.payload;
        },
        addEmployee: (state, action) => {
            return action.payload;
        },
    },
})

export const { employeeData, addEmployee } = display.actions;

export default display.reducer;