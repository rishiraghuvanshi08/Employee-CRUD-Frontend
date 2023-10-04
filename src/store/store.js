import { configureStore } from '@reduxjs/toolkit';
import display from '../slices/displaySlice';
import companyDisplay from '../slices/companyDisplay';
import companyOperations from '../slices/companySlice';
import employeeOperationSlice from '../slices/employeeOperation';

const store = configureStore({
    reducer: {
        companyData: companyOperations,
        showEmployeeDisplay: display,
        showCompanyDisplay : companyDisplay,
        getEmployees: employeeOperationSlice,
    },
})
export default store;