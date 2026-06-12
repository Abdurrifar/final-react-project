import { useLoaderData, useParams } from "react-router";
import { addTOStroedDB } from "../../utilities/addToDB";


const Bookdetails = () => {

    const { id } = useParams()
    const parseId = parseInt(id)
    const data = useLoaderData()
    const singlebook = data.find(book => book.bookId === parseId)
    const { bookName, image } = singlebook || {}



    // upor ar toku hocca click a dakhar kaj ar nicer gula and addToDB component hocca button ar kaj


    const handleMarkAsRead = (id) => {

        addTOStroedDB(id)
    }


    return (
        <div>
            <img className="w-48" src={image} alt="" />
            <h2>{bookName}</h2>

            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">As a Read</button>
            <button className="btn btn-info m-2">WishList</button>
        </div>
    );
};

export default Bookdetails;