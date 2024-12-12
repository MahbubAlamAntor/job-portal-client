import Lottie from "lottie-react";
import registerLottie from '../../assets/Register.json';
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const numberPattern = /[0-9]/;

        if (password.length < 6) {
            return toast.error('"Password must be at least 6 characters long."');
        }
        if (!uppercasePattern.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!lowercasePattern.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }
        if (!numberPattern.test(password)) {
            return toast.error("Password must contain at least one number.");
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Account Created')
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterBtn} className="card-body">
                        <h1 className="text-3xl font-bold mt-2 text-center">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <ToastContainer />
                        </div>
                    </form>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;