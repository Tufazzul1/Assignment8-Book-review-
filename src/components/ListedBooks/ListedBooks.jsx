import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/Localstorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishList from '../WishList/WishList';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedBookId = getStoredReadBook();
        if (books.length > 0) {
            const readBooks = books.filter(book => storedBookId.includes(book.bookId));
            const wishlistBooks = books.filter(book => storedBookId.includes(book.bookId));
            setReadBooks(readBooks);
            setWishlistBooks(wishlistBooks);
        }
    }, [books]);

    return (
        <div>
            <div className="text-center bg-gray-200 p-5 rounded-xl">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>
            <div className="text-center mt-6">
                <details className="dropdown">
                    <summary className="m-1 btn bg-sky-500 hover:bg-green-500 text-white">Sort By <RiArrowDropDownLine /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 space-y-2">
                        <Link>Rating</Link>
                        <Link>Number of Pages</Link>
                        <Link>Publisher Year</Link>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        <ReadBooks books={readBooks} ></ReadBooks>
                    </TabPanel>
                    <TabPanel>
                        <WishList books={wishlistBooks} ></WishList>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;