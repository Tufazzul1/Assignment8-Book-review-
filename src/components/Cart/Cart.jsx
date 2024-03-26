import PropTypes from 'prop-types'
import { FaCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRequestPage } from "react-icons/md";

const Cart = ({ book }) => {
    console.log(book)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-6">
                <figure><img src={book.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{book.bookName}</h2>
                    <h2 className="text-xl font-bold">By : {book.author}</h2>
                    <div className='flex space-x-5'>
                        <ul className="flex gap-8"> <span className="font-bold">Tag : </span>
                            {book.tags.map((tag, index) => (
                                <li className="bg-gray-200  rounded-full text-green-500" key={index}>#{tag}</li>

                            ))}
                        </ul>
                        <h4 className='flex gap-2'> <FaCalendarAlt />Year Of Publishing : {book.yearOfPublishing}</h4>
                    </div>
                    <div className='flex gap-2'>
                        <h4 className='flex gap-2'> <CgProfile /> Publisher : {book.publisher}</h4>
                        <h4 className='flex gap-2'><MdOutlineRequestPage />  Pages : {book.totalPages}</h4>
                    </div>
                    <br />
                    <hr />

                    <div className="space-x-4">
                        <span className='text-blue-500 bg-blue-200 rounded-3xl p-1'>Category : {book.category}</span>
                        <span className='text-orange-500 bg-orange-200 rounded-3xl p-1'>Rating : {book.rating}</span>
                        <button className="btn btn-primary rounded-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    book: PropTypes.object.isRequired
}
export default Cart;