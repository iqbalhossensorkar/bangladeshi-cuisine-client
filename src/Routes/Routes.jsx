import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Main from "../Layers/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
])

export default router;