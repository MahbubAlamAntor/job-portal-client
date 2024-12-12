import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
// import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {socialLoginGoogle} = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const pathname = location.pathname || '/';
    const handleGoogleLoginBtn = () => {
        socialLoginGoogle()
        .then(result => {
            console.log(result.user)
            // navigate(pathname)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLoginBtn} className="btn m-4">Google</button>
        </div>
    );
};

export default SocialLogin;