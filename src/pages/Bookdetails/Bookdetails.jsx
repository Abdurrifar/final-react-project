import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from "react-router";
import { addTOStroedDB } from "../../utilities/addToDB";



const Bookdetails = () => {

    const { id } = useParams()
    const parseId = parseInt(id)
    const data = useLoaderData()
    const singlebook = data.find(book => book.bookId === parseId)
    const { bookName, image } = singlebook || {}



    const handleMarkAsRead = (id) => {

        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     didOpen: () => {

        //         MySwal.showLoading()
        //     },
        // }).then(() => {
        //     return MySwal.fire(<p>Shorthand works too</p>)
        // })
        toast("Wow so easy!")
        addTOStroedDB(id)
    }


    return (
        <div>
            <img className="w-48" src={image} alt="" />
            <h2>{bookName}</h2>
            <ToastContainer />
            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">As a Read</button>
            <button className="btn btn-info m-2">WishList</button>
        </div>
    );
};

export default Bookdetails;