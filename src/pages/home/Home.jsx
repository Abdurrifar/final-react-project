


import { useLoaderData } from "react-router";
import Books from "../BOOKS/Books";
import Banner from "../banner/Banner";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;