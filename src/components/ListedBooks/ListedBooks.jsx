import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/Localstorage";


const ListedBooks = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([])

    useEffect(() => {
        const storedBookId = getStoredReadBook();
        console.log(storedBookId)
        if (books.lenght > 0) {
            const readBooks = books.filter(book => storedBookId.includes(book.bookId))
            console.log(books, storedBookId,readBooks)
        }
        setReadBooks(storedBookId)
    }, [])

    return (
        <div>
            <h2>Listed Books : {readBooks.length}</h2>
        </div>
    );
};

export default ListedBooks;