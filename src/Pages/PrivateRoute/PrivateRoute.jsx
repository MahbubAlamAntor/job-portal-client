import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user)
    // console.log(location)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(!user){
        return <Navigate to='/login' state={location}></Navigate>
    }
    return children
};

export default PrivateRoute;