import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li className="ml-2"><NavLink to='/myApplication'>My Application</NavLink></li>
        <li className="ml-2"><NavLink to='/addJob'>Add Job</NavLink></li>
        <li className="ml-2"><NavLink to='/myPostedJobs'>My Post Job</NavLink></li>
    </>
    const handleSignOutBtn = () => {
        signOutUser()
        .then(result => {
            console.log(result.user)
            toast.success('SuccessFully SignOUt')
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="flex items-center">
                    <img className="w-14" src={logo} alt="" />
                    <h2 className="text-2xl md:text-3xl font-bold">Job portal</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><button onClick={handleSignOutBtn} className="btn">Log Out</button>
                    </> : <>
                        <Link to='/register'>Register</Link>
                        <Link to='/login' className="btn ml-3">Log In</Link>
                        <ToastContainer></ToastContainer>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;