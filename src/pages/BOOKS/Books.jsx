import { useEffect, useState } from "react";
import Book from "./Book/Book";




const Books = ({ data }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   bg-white  gap-5 p-3 " >


            {
                data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
            }
        </div>
    );
};

export default Books;