import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Bookdetails from "../pages/Bookdetails/Bookdetails";
import ReadList from "../pages/ReadList/ReadList";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,

        children: [{
            index: true,
            loader: () => fetch('booksData.json'),
            path: "/",
            Component: Home
        },

        {
            path: "/about",
            Component: About
        },
        {
            path: 'readList',
            loader: () => fetch('booksData.json'),
            Component: ReadList
        },
        {
            path: "/bookDetails/:id",
            loader: () => fetch('booksData.json'),
            Component: Bookdetails
        }




        ]



    },
]);

export default Router;