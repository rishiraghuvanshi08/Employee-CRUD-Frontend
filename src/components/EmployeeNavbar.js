import { useDispatch } from "react-redux";
import { addEmpPage, employeeData } from "../slices/displaySlice";

const EmployeeNavbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar bg-primary navbar-expand-lg text-white">
                <div className="container-fluid  text-white">
                    <div className="navbar-brand text-white">Innogent</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => dispatch(employeeData("home"))} aria-current="page" >Employees</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => dispatch(addEmpPage("addEmployee"))} >Add Employee</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
export default EmployeeNavbar;
