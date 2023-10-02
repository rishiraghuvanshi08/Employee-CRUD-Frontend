import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "home",
}

const companyDisplay = createSlice({
    name: "companyDisplaySlice",
    initialState,
    reducers: {
        companiesData: (state, action) => {
            state.value = action.payload;
        },
        addCompany: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {companiesData, addCompany} = companyDisplay.actions;

export default companyDisplay.reducer;