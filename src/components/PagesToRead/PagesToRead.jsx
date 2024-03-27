
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';



const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
);

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then((response) => response.json())
            .then((data) => setBooks(data));

    }, []);

    const readBooksData = localStorage.getItem('read-book');
    const readBooks = books.filter(book => readBooksData.includes(book.bookId));
    // console.log(readBooks)

    return (
        <div className="bg-gray-200 mt-10 p-6 rounded-xl">
            <BarChart width={600} height={300} data={readBooks}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};


export default PagesToRead;

