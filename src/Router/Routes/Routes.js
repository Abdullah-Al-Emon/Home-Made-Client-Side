import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import ServicesDetails from "../../Pages/Home/ServicesDetails/ServicesDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
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
                element: <Blogs></Blogs>
            },
            {
                path: '/signIn',
                element: <SignIn/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/service',
                element: <Services/>,
            },
            {
                path: '/services/:id',
                element: <ServicesDetails/>,
                loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path: '/services',
                element: <AllServices/>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            }
        ]
    }
])