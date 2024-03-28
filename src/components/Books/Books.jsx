import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('Books.json')
            .then(response => response.json())
            .then((data) => setBooks(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center mt-20">Books</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 mt-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;