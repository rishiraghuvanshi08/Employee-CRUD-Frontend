import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../slices/addEmployee";
import { employeeData } from "../slices/displaySlice";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    dateOfJoining: "",
    companyId: "",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.employee);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addEmployee action with the employee data
    dispatch(
      addEmployee({
        companyId: employee.companyId,
        employeeData: {
          name: employee.name,
          dateOfJoining: employee.dateOfJoining,
        },
      })
    );
    dispatch(employeeData("home"));
  };

  return (
    <div id="addEmp">
        <h2>Fill the form to add a new Employee</h2>
      <form id="addEmpForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={employee.name} // Bind input value to state
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })} // Update state on input change
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="yyyy-MM-dd"
            value={employee.dateOfJoining}
            onChange={(e) =>
              setEmployee({
                ...employee,
                dateOfJoining: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Company ID"
            value={employee.companyId}
            onChange={(e) =>
              setEmployee({
                ...employee,
                companyId: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AddEmployee;
