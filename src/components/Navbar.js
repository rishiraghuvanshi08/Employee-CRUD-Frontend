import { useDispatch } from "react-redux";
import { addEmployee, employeeData } from "../slices/displaySlice";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar bg-primary navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="navbar-brand">Innogent</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => dispatch(employeeData("home"))} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => dispatch(addEmployee("addEmployee"))} href="#">Add Employee</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
