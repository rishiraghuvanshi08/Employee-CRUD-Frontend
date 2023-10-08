import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeData } from "../slices/displaySlice";
import { addNewEmployee } from "../slices/employeeOperation";
import { useLocation } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    dateOfJoining: "",
    companyId: "",
  });
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const defaultCompanyId = searchParams.get("comapnyId");

  useEffect(() => {
    if (defaultCompanyId !== null) {
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        companyId: defaultCompanyId,
      }));
    }
  }, [defaultCompanyId]);

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
  };

  return (
    <div id="addCss">
      <h3 id="heading">Fill the form to add a new Employee</h3>
      <form id="addEmpForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={employee.name} // Bind input value to state
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })} // Update state on input change
            required
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
            required
          />
        </div>
        {defaultCompanyId === null ? (
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
              required
            />
          </div>
        ) : (
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Company ID"
              value={defaultCompanyId}
              readOnly
            />
          </div>
        )}
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
