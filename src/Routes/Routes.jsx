import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Main from "../Layers/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
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