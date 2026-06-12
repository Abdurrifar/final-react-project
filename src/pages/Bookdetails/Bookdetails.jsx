import { useLoaderData, useParams } from "react-router";


const Bookdetails = () => {

    const { id } = useParams()
    const parseId = parseInt(id)
    const data = useLoaderData()
    const singlebook = data.find(book => book.bookId === parseId)
    const { bookName, image } = singlebook

    console.log(id);
    return (
        <div>
            <img className="w-48" src={image} alt="" />
            <h2>{bookName}</h2>
        </div>
    );
};

export default Bookdetails;