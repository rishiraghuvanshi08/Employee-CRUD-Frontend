import { configureStore } from '@reduxjs/toolkit';
import employee from '../slices/employeeSlice';
import display from '../slices/displaySlice';
import employeeReducer from '../slices/employeeSlice'

const store = configureStore({
    reducer: {
        data: employee,
        showDisplay: display,
        employee: employeeReducer,
    },
})
export default store;