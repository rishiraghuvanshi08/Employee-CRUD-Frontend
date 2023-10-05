import { useSelector } from "react-redux";
import EmployeeData from "./EmployeeData";
import AddEmployee from "./AddEmployee";

const EmployeeDisplay = () => {
    const toShow = useSelector((state) => state.showEmployeeDisplay);

    return(
        <>
            <div>
                {toShow === "home" ? <EmployeeData /> : null}       
                {toShow === "addEmployee" ? <AddEmployee /> : null}
            </div>
            
        </>
    )
}
export default EmployeeDisplay;