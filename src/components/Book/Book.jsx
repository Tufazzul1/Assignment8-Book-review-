import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {bookId, bookName, image, rating, category, author, tags } = book
    return (
    <Link to={`booksDetails/${bookId}`}>
        <div className='border border-gray-200 p-6 rounded-xl shadow-lg'>
            <div className='flex items-center justify-center'>
                <img className='px-20 py-4  bg-gray-200 rounded-xl' src={image} alt="" />
            </div>
            <h4><ul className="flex gap-8 mt-5"> 
                        {book.tags.map((tag, index) => (
                            <li className="text-green-500" key={index}>{tag}</li>
                        ))}
                    </ul> </h4>
            <h2 className='text-3xl font-bold mt-3'>{bookName}</h2>
            <p className='font-bold mt-2'>By : {author}</p>

            <div className='flex mt-6 justify-between'>
                <p>{category}</p>
                <p className='inline-flex gap-2'>Rating: {rating} <FaRegStar /> </p>
            </div>
        </div>
    </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;