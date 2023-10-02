import CompanyNavbar from "./CompanyNavbar";
import { NavLink } from 'react-router-dom';
import CompanyDisplay from "./CompanyDisplay"

const Company = () => {
    return (
        <>
            <div classNameName="text-center">
                <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
                    <div className="container-fluid text-center">
                        <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto">
                                <NavLink to='/' className="nav-link " >Company</NavLink>
                                <NavLink to='/employee' className="nav-link" >Employee</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <CompanyNavbar />
            </div>
            <div>
                <CompanyDisplay />
            </div>

        </>
    )
}
export default Company;