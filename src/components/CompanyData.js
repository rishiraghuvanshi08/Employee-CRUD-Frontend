import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../slices/companySlice";
import { useEffect } from "react";


const CompanyData = () => {
    const { companies, loading, error } = useSelector((state) => state.companyData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanies());
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
                <h1>Company Data From Database</h1>

                <table className="table-primary" id="empDataTable">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Employee List</th>
                    </tr>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>
                                {company.employeeList.map((employee) => (
                                    <div key={employee.id}>
                                        <p>Id: {employee.id}, Name: {employee.name}, Date Of Joining: {employee.dateOfJoining}</p>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </table>

                
            </div>
        </>
    );
}
export default CompanyData;