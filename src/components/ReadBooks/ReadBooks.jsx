import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const ReadBooks = ({books}) => {
    // console.log(books)
    return (
        <div className='space-y-6'>
            {
                books.map(book => <Cart key={book.bookId} book={book}></Cart>)
            }
        </div>
    );
};

ReadBooks.propTypes ={
    books: PropTypes.array.isRequired
}
export default ReadBooks;