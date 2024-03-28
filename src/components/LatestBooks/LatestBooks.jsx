

const LatestBooks = () => {
    return (
        <div>
            <div className="text-center bg-gray-200 p-5 rounded-xl">
                <h2 className="text-3xl font-bold">Latest books</h2>
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-4 mt-10">
                {/* Cards */}
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/F462D4f/pngwing-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">To Kill a Mockingbird</h2>
                        <p>George Orwells dystopian masterpiece, 1984, paints a chilling picture of a totalitarian society where freedom and individuality are suppressed. </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/kBWS0k5/kindpng-1064993.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Great Gatsby</h2>
                        <p> The Great Gatsby is a tragic tale of love, wealth, and the American Dream set in the Jazz Age. F. Scott Fitzgeralds lyrical prose and vivid imagery transport readers to the opulent world of Jay Gatsby and the disillusioned Nick Carraway. </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/xKZ77KC/kindpng-7318921.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">1984 T</h2>
                        <p>George Orwells dystopian masterpiece, 1984, paints a chilling picture of a totalitarian society where freedom and individuality are suppressed.   </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/wsZDMgk/kindpng-4022054-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pride and Prejudice</h2>
                        <p>To Kill a Mockingbird is a timeless classic that delves into themes of racial injustice, morality, and compassion.  </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/ts9BvLx/kindpng-81724-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Harry Potter and the Philosophers Stone</h2>
                        <p>To Kill a Mockingbird is a timeless classic that delves into themes of racial injustice, morality, and compassion.  </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl p-4">
                    <figure><img src="https://i.ibb.co/dpThcTr/kindpng-2193744-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Catcher in the Ryed</h2>
                        <p>To Kill a Mockingbird is a timeless classic that delves into themes of racial injustice, morality, and compassion.  </p>
                        <div className="card-action">
                            <button className="btn btn-primary">Read Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBooks;