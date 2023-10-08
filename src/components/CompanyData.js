import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCompany, getCompanies, updateCompanyDetails } from "../slices/companySlice";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { addEmpPage, employeeData } from "../slices/displaySlice";

const CompanyData = () => {
    const { companies, loading, error } = useSelector((state) => state.companyData)
    // let sortedCompanies = [];

    const [show, setShow] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const [selectedCompany, setSelectedCompany] = useState(null);

    const [updateCompany, setUpdateCompany] = useState({});

    // sortedCompanies = companies.slice().sort((a, b) => a.id - b.id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanies());
    }, []);

    // Show employees modal
    const handleClose = () => setShow(false);
    const handleShow = (company) => {
        setSelectedCompany(company);
        setShow(true);
        dispatch(employeeData("home"));
    };

    // update modal
    const handleUpdateModal = (company) => {
        setSelectedCompany(company);
        setShowUpdateModal(true);

        setUpdateCompany({ name: company.name, employeeList: company.employeeList });
    }

    // Function to close the update modal
    const handleCloseUpdateModal = () => {
        setSelectedCompany(null);
        setShowUpdateModal(false);
    }

    const handleUpdateSave = (id) => {
        dispatch(updateCompanyDetails(id, updateCompany));
        setShowUpdateModal(false);
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
                            <th scope="col" style={{ width: '550px' }}>Actions</th>
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
                                        style={{ width: '154px' }}
                                    >
                                        Show Employees
                                    </Button>&nbsp;&nbsp;
                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(deleteCompany(company.id))}
                                        style={{ width: '154px' }}
                                    >
                                        Delete Company
                                    </Button>&nbsp;&nbsp;
                                    <Button
                                        variant="success"
                                        onClick={() => handleUpdateModal(company)}
                                        style={{ width: '154px' }}
                                    >
                                        Update Company
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCompany?.employeeList.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.dateOfJoining}</td>
                                    <td><NavLink type="button" className="btn btn-success" to={`/employee?employeeId=${employee.id}`} >Action</NavLink></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal.Footer>
                        <NavLink className="btn btn-primary" to={`/employee?comapnyId=${selectedCompany?.id}`} onClick={() => dispatch(addEmpPage("addEmployee"))} style={{width: "200px"}} >
                            Add New Employee
                        </NavLink>
                        {/* <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button> */}
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                <Modal.Dialog style={{ maxWidth: '800px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update {selectedCompany?.name}</Modal.Title>
                    </Modal.Header>
                    <form className="m-3">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                defaultValue={selectedCompany?.name}
                                onChange={(e) => setUpdateCompany({ ...updateCompany, name: e.target.value })} // Update state on input change
                                required
                            />
                        </div>
                    </form>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => handleUpdateSave(selectedCompany?.id)}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}
export default CompanyData;