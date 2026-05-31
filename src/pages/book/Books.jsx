import { useEffect, useState } from "react";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        console.log(books);
    }, [])
    return (
        <div>

            <h1 >hello ami books {books.length}</h1>
        </div>
    );
};

export default Books;