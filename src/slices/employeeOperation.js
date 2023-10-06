import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    employees: [],
    loading: false,
    error: null,
}

export const getEmp = () => {
    return async (dispatch) => {
        try {
            dispatch(employeeLoading())
            const response = await axios.get('http://localhost:8080/company/getEmp');
            dispatch(fetchEmployeeFulfiled(response.data))
        }
        catch (error) {
            dispatch(employeeRejected())
        }
    }
};

export const addNewEmployee = ({ companyId, employeeData }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:8080/company/addEmployee/${companyId}`,
                employeeData
            );
            if(response.data != null){
                dispatch(addEmployeeFulfiled(response.data))
            }
        } catch (error) {
            dispatch(employeeRejected())
        }
    }
}

export const employeeDeletion = (employeeId) => {
    return async (dispatch) => {
        try {
            dispatch(employeeLoading())
            const response = await axios.delete(`http://localhost:8080/company/deleteEmp/${employeeId}`);
            dispatch(deleteEmployeeFulfiled(employeeId));
        } catch (error) {
            dispatch(employeeRejected())
        }
    }
}

export const employeeUpdation = (updatedEmployee) => {
    return async (dispatch) => {
        try {
            dispatch(employeeLoading())
            const response = await axios.put(`http://localhost:8080/company/updateEmployee`, updatedEmployee);
            dispatch(updateEmployeeFulfiled(response.data));
        } catch (error) {
            dispatch(employeeRejected())
        }
    }
}

export const employeeOperation = createSlice({
    name: "employeeOperationSlice",
    initialState,
    reducers: {
        fetchEmployeeFulfiled: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        employeeLoading: (state, action) => {
            state.loading = true;
        },
        employeeRejected: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        addEmployeeFulfiled: (state, action) => {
            state.loading = false;
            let empList = [...state.employees];
            empList.push(action.payload);
            state.employees = empList;

            // Alternate Way
            // state.employees.push(action.payload);
        },
        deleteEmployeeFulfiled: (state, action) => {
            state.loading = false;
            state.employees = state.employees.filter((e) => e.id !== action.payload);
        },
        updateEmployeeFulfiled: (state, action) => {
            state.loading = false;

            let tempEmps=[...state.employees];
            let remove= tempEmps.filter((e)=>e.id!==action.payload.id);
            remove.push(action.payload);
            state.employees=remove;
        }
    }
});

export const {
    fetchEmployeeFulfiled,
    employeeLoading,
    employeeRejected,
    addEmployeeFulfiled,
    deleteEmployeeFulfiled,
    updateEmployeeFulfiled,
} = employeeOperation.actions;

export default employeeOperation.reducer;