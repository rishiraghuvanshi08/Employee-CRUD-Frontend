import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../slices/employeeSlice";

const EmployeeData = () => {
    const employeesData = useSelector((state) => state.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllData());
    }, [employeesData]);

    if (!employeesData.employees || employeesData.employees.length === 0) {
        // Render a loading indicator or error message
        return (
            <div id="displayDiv">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <div id="displayDiv">
                <h1>Employee Data From Database</h1>

                <table className="table-primary" id="empDataTable">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">date of joining</th>
                    </tr>
                    {employeesData.employees.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.dateOfJoining}</td>
                        </tr>
                    ))}
                    <td>

                    </td>
                </table>
            </div>
        </>
    );
}
export default EmployeeData;