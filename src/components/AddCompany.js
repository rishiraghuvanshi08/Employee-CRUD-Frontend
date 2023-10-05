import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCompany } from "../slices/companySlice";

const AddCompany = () => {
  const [company, setCompany] = useState({
    name: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // Dispatch the addCompany action with the employee data
    dispatch(
      addNewCompany({
        companyData: {
          name: company.name,
        },
      })
    );
  };

  return (
    <div id="addCss">
        <h2 id="heading">Fill the form to add a new Company</h2>
        <form id="addEmpForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={company.name} // Bind input value to state
            onChange={(e) => setCompany({ ...company, name: e.target.value })} // Update state on input change
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Add Company
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;
