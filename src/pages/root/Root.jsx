import { Outlet } from "react-router";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;