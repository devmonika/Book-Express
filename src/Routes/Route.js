import { createBrowserRouter } from "react-router-dom";
import BuyerDashboard from "../Dashboard/BuyerDashboard/BuyerDashboard";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllCategory from "../pages/Allcategory/AllCategory";
import AllUsers from "../pages/AllUsers/AllUsers";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import SingleCatBook from "../pages/SingleCatBook/SingleCatBook";
import AdminRoute from "./AdminRoutes/AdminRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allcategory',
                element:<AllCategory></AllCategory>
            },
             {   path:'/category/:id',
                element:<SingleCatBook></SingleCatBook>,
                loader: ({params}) => fetch(`https://book-express-server.vercel.app/category/${params.id}`)
            },
            {
				path: '*',
				element: <ErrorPage></ErrorPage>
			},
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<BuyerDashboard></BuyerDashboard>
               
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default router;