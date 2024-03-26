import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/Localstorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([])

    useEffect(() => {
        const storedBookId = getStoredReadBook();
        console.log(storedBookId)
        if (books.lenght > 0) {
            const readBooks = books.filter(book => storedBookId.includes(book.bookId))
            console.log(books, storedBookId, readBooks)
        }
        setReadBooks(storedBookId)
    }, []) 

    return (
        <div>
            <div className="text-center bg-gray-200 p-5 rounded-xl">
                <h2 className="text-3xl font-bold">Books : {readBooks.length}</h2>
            </div>
            <div className="text-center mt-6">
                <details className="dropdown">
                    <summary className="m-1 btn bg-sky-500 hover:bg-green-500 text-white">Sort By <RiArrowDropDownLine /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Boooks</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>Read Books data</TabPanel>
                    <TabPanel>Wishlist Data</TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;