import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

import {
    createBrowserRouter
  } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobsDetails from "../Pages/JobsDetails/JobsDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import MyApplication from "../MyApplication/MyApplication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <p>Your Page Not Found</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobsDetails></JobsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <JobApply></JobApply>
            },
            {
                path:'/myApplication',
                element: <PrivateRoute> <MyApplication></MyApplication></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;