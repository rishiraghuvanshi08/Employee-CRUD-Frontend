import { useSelector } from "react-redux";
import EmployeeData from "./EmployeeData";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";

const EmployeeDisplay = () => {
    const toShow = useSelector((state) => state.showEmployeeDisplay);

    return(
        <>
            <div>
                {toShow === "home" ? <EmployeeData /> : null}       
                {toShow === "addEmployee" ? <AddEmployee /> : null}      
                {toShow === "updateEmp" ? <UpdateEmployee /> : null}
            </div>
            
        </>
    )
}
export default EmployeeDisplay;