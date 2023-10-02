import { configureStore } from '@reduxjs/toolkit';
import employee from '../slices/employeeSlice';
import display from '../slices/displaySlice';
import employeeReducer from '../slices/employeeSlice'
import companyDisplay from '../slices/companyDisplay';
import companySlice from '../slices/companySlice';

const store = configureStore({
    reducer: {
        data: employee,
        companyData: companySlice,
        employee: employeeReducer,
        showEmployeeDisplay: display,
        showCompanyDisplay : companyDisplay,
        
    },
})
export default store;