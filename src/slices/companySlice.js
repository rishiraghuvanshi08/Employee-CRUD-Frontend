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

export const deleteCompany = (companyId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:8080/company/deleteComp/${companyId}`);
            dispatch(companyDeletion(companyId));
        } catch (error) {
            dispatch(companiesRejected());
        }
    }
}

export const updateCompanyDetails = (id, updateCompany) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:8080/company/updateCompany/${id}`, updateCompany);
            dispatch(companyUpdation(response.data))
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
        },
        companyDeletion: (state, action) => {
            state.companies = state.companies.filter((c) => c.id !== action.payload);
        },
        companyUpdation: (state, action) => {
            // let companyId = action.payload.id;
            // state.companies = state.companies.filter((c) => c.id !== companyId);
            // state.companies.push(action.payload);

            let companyId = action.payload.id;
            const index = state.companies.findIndex((c) => c.id === companyId);

            if(index != -1){
                state.companies[index] = action.payload;
            }
        }
    }
})

export const {
    getCompaniesFulfiled,
    companiesLoading,
    companiesRejected,
    newCompany,
    companyDeletion,
    companyUpdation,
} = companySlice.actions;

export default companySlice.reducer;

