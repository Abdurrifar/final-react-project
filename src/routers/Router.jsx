import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,

        children: [{
            index: true,
            path: "/",
            element: <Home></Home>
        }]


    },
]);

export default Router;