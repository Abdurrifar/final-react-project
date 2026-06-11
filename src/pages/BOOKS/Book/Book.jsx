import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {

    const { bookName, author, image, category, rating, review, bookId, tags, yearOfPublishing, publisher } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`} >
            <div className="card bg-white border border-gray-300 border-2 text-gray-700 shadow-sm mb-5 mt-5 p-4 shadow    " >


                <figure className=" bg-gray-200 w-2/3 mx-auto rounded-lg p-5 border border-gray-300 border-1 shadow-sm " >
                    <img className="
                h-[166px] "
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-12">
                        {tags.map(tag => <button>{tag}</button>)}
                    </div>

                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>

                    <p>{author} </p>


                    <p className="border-b-1 border-dashed"> by :{publisher} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline  ">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                        <div>
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    );
};

export default Book;