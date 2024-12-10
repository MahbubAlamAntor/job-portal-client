import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loginInLottie from '../../assets/login.json';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLoginBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            return toast.error('"Password must be at least 6 characters long."');
        }

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Login')
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginBtn} className="card-body">
                        <h1 className="text-3xl font-bold mt-2 text-center">Login now!</h1>
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
                            <button className="btn btn-primary">Login</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;