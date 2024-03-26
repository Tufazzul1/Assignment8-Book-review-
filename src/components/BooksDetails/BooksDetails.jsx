import { useLoaderData, useParams } from "react-router-dom";


const BooksDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt)
    console.log(book)
    return (
        <div className="flex gap-6 mt-10">
            <div className="flex-1">
                <img src={book.image} alt="" className="w-3/5 ml-6" />
            </div>
            <div className="flex-1">
                <h3 className="text-4xl font-bold">{book.bookName}</h3>
                <h4 className="font-semibold text-xl mt-3">By : {book.author}</h4>
                <br />
                <hr />
                <h4 className="text-xl mt-4 mb-4">{book.category}</h4>
                <hr />

                <p><span className="font-bold">Review :</span> {book.review}</p>
                <br />
                <div className="flex">
                    <p> <ul className="flex gap-8"> <span className="font-bold">Tag : </span>
                        {book.tags.map((tag, index) => (
                            <li className="text-green-500" key={index}>#{tag}</li>
                        ))}
                    </ul> </p>
                </div>
                <br />
                <hr />
                <p>Number of Page : <span className="font-bold"> {book.totalPages}</span></p>
                <p>Publisher : <span className="font-bold"> {book.publisher}</span></p>
                <p>Years of Publish : <span className="font-bold">{book.yearOfPublishing}</span></p>
                <p>Rating : <span className="font-bold"> {book.rating}</span></p>
                
                <div className="mt-6 space-x-3">
                <button className="btn btn-info hover:bg-green-500 text-white">Read</button>
                <button className="btn btn-info hover:bg-green-500 text-white">Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;