import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blog from "../Pages/Home/Blogs/Blog";
import First from "../Pages/Home/First/First";
import Recipies from "../Pages/Home/Recipies/Recipies";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <First></First>
            },
            {
                path: '/chefs/:id',
                element: <Recipies></Recipies>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
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