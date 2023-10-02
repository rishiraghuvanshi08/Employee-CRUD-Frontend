import { useDispatch } from "react-redux";
import { addCompany, companiesData } from "../slices/companyDisplay";

const CompanyNavbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar bg-primary navbar-expand-lg text-white">
                <div className="container-fluid text-white">
                    <div className="navbar-brand text-white">Innogent</div>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-white">
                                <button className="nav-link text-white" onClick={() => dispatch(companiesData("home"))} >Companies</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => dispatch(addCompany("addCompany"))} >Add Company</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
export default CompanyNavbar;
