import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blog from "../Pages/Home/Blogs/Blog";
import First from "../Pages/Home/First/First";
import Recipies from "../Pages/Home/Recipies/Recipies";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Terms from "../Pages/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: ({params}) => fetch(`https://bangladeshi-cuisine-server-iqbalhossensorkar.vercel.app/chefs/${params.id}`),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <First></First>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><Recipies></Recipies></PrivateRoute>,
                loader: ({params}) => fetch(`https://bangladeshi-cuisine-server-iqbalhossensorkar.vercel.app/chefs/${params.id}`)
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
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
])

export default router;