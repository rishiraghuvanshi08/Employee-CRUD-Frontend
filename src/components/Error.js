import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Errors = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="errorDiv">
                404 Error.. Page Not Found<br />
                Please Check URL..
            </div>
            <div id="errorDiv">
                <Button className="btn btn-warning" onClick={() => navigate("/")} style={{width: "280px"}}>Company Page</Button>
            </div>

        </>
    )
}
export default Errors;