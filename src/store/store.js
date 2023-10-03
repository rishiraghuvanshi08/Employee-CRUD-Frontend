import { configureStore } from '@reduxjs/toolkit';
import employee from '../slices/employeeSlice';
import display from '../slices/displaySlice';
import employeeReducer from '../slices/employeeSlice'
import companyDisplay from '../slices/companyDisplay';
import companySlice from '../slices/companySlice';
import deleteEmployeeSlice from '../slices/deleteEmployee';

const store = configureStore({
    reducer: {
        data: employee,
        companyData: companySlice,
        employee: employeeReducer,
        showEmployeeDisplay: display,
        showCompanyDisplay : companyDisplay,
        deleteEmployee: deleteEmployeeSlice,
    },
})
export default store;