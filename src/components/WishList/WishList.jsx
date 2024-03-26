import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const WishList = ({books}) => {
    console.log(books)
    return (
        <div>
            {
                books.map(book => <Cart key={book.bookId} book={book}></Cart>)
            }
        </div>
    );
};

WishList.propTypes ={
    books: PropTypes.array.isRequired
}

export default WishList;