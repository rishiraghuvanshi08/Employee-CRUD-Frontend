import { useSelector } from "react-redux";
import AddCompany from "./AddCompany";
import CompanyData from "./CompanyData";


const CompanyDisplay = () => {
    const { value } = useSelector((state) => state.showCompanyDisplay);

    return(
        <>
            <div>
                {value === "home" ? <CompanyData /> : null}       
                {value === "addCompany" ? <AddCompany /> : null}      
            </div>
            
        </>
    )
}
export default CompanyDisplay;