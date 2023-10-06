import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeDeletion, employeeUpdation, getEmp } from "../slices/employeeOperation";
import { useLocation } from "react-router-dom";

const EmployeeData = () => {
    const [updateEmployee, setUpdateEmployee] = useState({});
    let sortedEmployees = [];

    const { employees, loading, error } = useSelector((state) => state.getEmployees)
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const employeeId = searchParams.get('employeeId');

    if(employeeId != null){
        let toUpdateEmployee = Number.parseInt(employeeId);
        sortedEmployees = employees.filter((e)=> e.id === toUpdateEmployee);
    }
    else {
        sortedEmployees = employees.slice().sort((a, b) => a.id - b.id);
    }

    useEffect(() => {
        console.log("useEffect")
        dispatch(getEmp());
    }, []);

    const handleUpdate = (emp) => {
        setUpdateEmployee(emp);
    };

    const handleUpdateSave = () => {
        dispatch(employeeUpdation(updateEmployee))
        // navigate('/employee');
    };

    if (loading) {
        return (
            <div id="displayDiv">
                <h1>Loading...</h1>
            </div>
        );
    }
    if (error) {
        return (
            <div id="displayDiv">
                <h1>Something went wrong...</h1>
            </div>
        );
    }

    return (
        <>
            <div id="displayDiv">
                <h1>Employee Data</h1>

                <table className="table-primary" id="empDataTable">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date of Joining</th>
                        <th scope="col">Operations</th>
                    </tr>
                    {sortedEmployees.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.dateOfJoining}</td>
                            <td id="center">
                                <button type="button" onClick={() => handleUpdate(ele)} className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#exampleModal-${ele.id}`} >
                                    Update
                                </button>

                                <div className="modal fade" id={`exampleModal-${ele.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${ele.id}`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={`exampleModalLabel-${ele.id}`}>Update Details</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="addEmpForm">
                                                    <div className="mb-3">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Enter Name"
                                                            defaultValue={ele.id} // Bind input value to state
                                                            // onChange={(e) => setUpdateEmployee({ ...updateEmployee, name: e.target.value })} // Update state on input change
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Name"
                                                            defaultValue={ele.name} // Bind input value to state
                                                            onChange={(e) => setUpdateEmployee({ ...updateEmployee, name: e.target.value })} // Update state on input change
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="yyyy-MM-dd"
                                                            value={updateEmployee ? updateEmployee.dateOfJoining : ""}
                                                            onChange={(e) => setUpdateEmployee({ ...updateEmployee, dateOfJoining: e.target.value })}
                                                            pattern="\d{4}-\d{2}-\d{2}"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                                <button type="button" onClick={handleUpdateSave} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(employeeDeletion(ele.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}
export default EmployeeData;