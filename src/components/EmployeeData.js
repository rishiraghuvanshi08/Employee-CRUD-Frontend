import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../slices/employeeSlice";
import { deleteEmployee } from "../slices/deleteEmployee";

const EmployeeData = () => {
    const { employees, loading, error } = useSelector((state) => state.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllData());
    }, []);

    if (loading) {
        // Render a loading indicator or error message
        return (
            <div id="displayDiv">
                <h1>Loading...</h1>
            </div>
        );
    }
    if(error){
        return (
            <div id="displayDiv">
                <h1>Something went wrong...</h1>
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
                        <th scope="col">Operations</th>
                    </tr>
                    {employees.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.dateOfJoining}</td>
                            <td><button onClick={() => dispatch(deleteEmployee(ele.id))}>Delete</button></td>
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