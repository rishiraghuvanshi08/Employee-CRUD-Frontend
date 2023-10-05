import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanies = () => {
    return async (dispatch) => {
        try {
            dispatch(companiesLoading())
            const response = await axios.get("http://localhost:8080/company/getComp")
            dispatch(getCompaniesFulfiled(response.data));
        } catch (error) {
            dispatch(companiesRejected());
        }
    }
}

export const addNewCompany = ({ companyData }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:8080/company/addCompany", companyData);
            dispatch(newCompany(response.data));
        } catch (error) {
            dispatch(companiesRejected());
        }
    }
}

export const companySlice = createSlice({
    name: "companySlice",
    initialState: {
        companies: [],
        loading: false,
        error: null,
    },
    reducers: {
        getCompaniesFulfiled: (state, action) => {
            state.loading = false;
            state.companies = action.payload;
        },
        companiesLoading: (state, action) => {
            state.loading = true;
        },
        companiesRejected: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        newCompany: (state, action) => {
            state.loading = false;
            state.companies.push(action.payload);
        }
    }
})

export const {
    getCompaniesFulfiled,
    companiesLoading,
    companiesRejected,
    newCompany,
} = companySlice.actions;

export default companySlice.reducer;

