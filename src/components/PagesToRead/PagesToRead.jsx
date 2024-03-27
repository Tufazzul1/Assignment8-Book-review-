// import { BarChart, Bar, XAxis, YAxis } from 'recharts';




const PagesToRead = () => {
    const readBooksData = localStorage.getItem('read-book')
    console.log(readBooksData)
    
    
    return (
        <div>

            <h4>Pages Read : {readBooksData}</h4>
            {/* <BarChart width={600} height={300}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8"
                    shape={<TriangleBar />} />
            </BarChart> */}
        </div>
    );
};

export default PagesToRead;