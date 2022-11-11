import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import NoPageFound from '../../Pages/NoPageFound/NoPageFound';
import AllServices from "../../Pages/AllServices/AllServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import AddService from "../../Pages/AddService/AddService";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:serviceId',
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-raj073-main.vercel.app/service/${params.serviceId}`),
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/addService',
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>,
            },
            {
                path: '/updateReview/:_id',
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-raj073-main.vercel.app/reviewById/${params._id}`),
                element: <UpdateReview></UpdateReview>,
            },
            {
                path: '*',
                element: <NoPageFound></NoPageFound>
            }
        ]
    }
])