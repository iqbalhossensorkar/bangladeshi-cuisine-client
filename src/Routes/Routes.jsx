import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Main from "../Layers/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Chefs from "../Pages/Home/Chefs/Chefs";
import Blog from "../Pages/Home/Blogs/Blog";
import First from "../Pages/Home/First/First";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <First></First>
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
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;