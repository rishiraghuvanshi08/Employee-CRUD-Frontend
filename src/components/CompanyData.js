import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompanies } from "../slices/companySlice";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { employeeData } from "../slices/displaySlice";

const CompanyData = () => {
    const { companies, loading, error } = useSelector((state) => state.companyData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanies());
    }, []);

    const [show, setShow] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (company) => {
        setSelectedCompany(company);
        setShow(true);
        dispatch(employeeData("home"));
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
                <h1>Company Data</h1>

                <table id="empDataTable">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company.id}>
                                <td>{company.id}</td>
                                <td>{company.name}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleShow(company)}
                                        style={{ width: '174px' }}
                                    >
                                        Show Employees
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog style={{ maxWidth: '1500px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Employees of {selectedCompany?.name}</Modal.Title>
                    </Modal.Header>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Date Of Joining</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCompany?.employeeList.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.dateOfJoining}</td>
                                    <td><NavLink type="button" className="btn btn-success" to={`/employee?employeeId=${employee.id}`} >Update</NavLink></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}
export default CompanyData;