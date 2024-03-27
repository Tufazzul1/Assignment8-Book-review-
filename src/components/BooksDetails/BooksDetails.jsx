import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook } from "../../Utility/Localstorage";

const BooksDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);

    const [isRead, setIsRead] = useState(false);
    const [isWishList, setWishList] = useState(false);

    const handleRead = () => {
        if (isRead) {
            toast.error('You have already marked this book as read');
        } else {
            saveReadBook(bookIdInt);
            setIsRead(true);
            toast.success('Book marked as read');
        }
    };

    const handleWishList = () => {
        if (!isWishList) {
            saveReadBook(bookIdInt);
            setWishList(true)
            toast.success('Book added to wish list');
        }
        else {
            toast.error('You have already added this book in wish list');
        }
    };

    return (
        <div className="lg:flex gap-6 mt-10">
            <div className="flex-1 flex justify-center items-center">
                <img src={book.image} alt="" className="w-3/5" />
            </div>
            <div className="flex-1 p-4">
                <h3 className="text-4xl font-bold">{book.bookName}</h3>
                <h4 className="font-semibold text-xl mt-3">By : {book.author}</h4>
                <br />
                <hr />
                <h4 className="text-xl mt-4 mb-4">{book.category}</h4>
                <hr />

                <p><span className="font-bold">Review :</span> {book.review}</p>
                <br />
                <div className="flex">
                    <ul className="flex gap-8"> <span className="font-bold">Tag : </span>
                        {book.tags.map((tag, index) => (
                            <li className="text-green-500" key={index}>#{tag}</li>
                        ))}
                    </ul>
                </div>
                <br />
                <hr />
                <p>Number of Page : <span className="font-bold"> {book.totalPages}</span></p>
                <p>Publisher : <span className="font-bold"> {book.publisher}</span></p>
                <p>Years of Publish : <span className="font-bold">{book.yearOfPublishing}</span></p>
                <p>Rating : <span className="font-bold"> {book.rating}</span></p>


                {/* Read and WisList Buttons */}
                <div className="mt-6 space-x-3 flex">

                    <button onClick={handleRead} className="btn btn-info hover:bg-green-500 text-white">Read</button>

                    <button
                        onClick={handleWishList}
                        className="btn btn-info hover:bg-green-500 text-white">Wish List
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BooksDetails;
