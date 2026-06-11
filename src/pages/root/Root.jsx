import { Outlet } from "react-router";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";


const Root = () => {
    return (
        <div className="max-w-6xl text-gray-700  bg-white  max-h-screen mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;