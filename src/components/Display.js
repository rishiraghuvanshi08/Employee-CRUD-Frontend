import { useSelector } from "react-redux";
import EmployeeData from "./EmployeeData";
import AddEmployee from "./AddEmployee";

const Display = () => {
    const toShow = useSelector((state) => state.showDisplay);

    return(
        <>
            <div>
                {toShow === "home" ? <EmployeeData /> : null}       
                {toShow === "addEmployee" ? <AddEmployee /> : null}      
            </div>
            
        </>
    )
}
export default Display;