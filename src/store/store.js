import { configureStore } from '@reduxjs/toolkit';
import employee from '../slices/employeeSlice';
import display from '../slices/displaySlice';

const store = configureStore({
    reducer: {
        data: employee,
        showDisplay: display,
    },
})
export default store;