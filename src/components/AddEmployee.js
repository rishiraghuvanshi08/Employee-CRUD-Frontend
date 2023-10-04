import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeData } from "../slices/displaySlice";
import { addNewEmployee } from "../slices/employeeOperation";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    dateOfJoining: "",
    companyId: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("Bye Bye..")
    dispatch(
      addNewEmployee({
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
            type="date"
            className="form-control"
            placeholder="yyyy-MM-dd"
            value={employee.dateOfJoining}
            onChange={(e) =>
              setEmployee({
                ...employee,
                dateOfJoining: e.target.value,
              })
            }
            pattern="\d{4}-\d{2}-\d{2}"
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
    </div>
  );
};

export default AddEmployee;
