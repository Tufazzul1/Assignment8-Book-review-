
import '../../../public/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero h-[550px] bg-base-200 rounded-2xl p-6 mt-3">
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between w-full">
                <div className='w-[40%] flex items-center justify-center'>
                    <img src="../../../public/pngwing 1.png" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-[60%] lg:mt-24 lg:ml-16'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />
                        your bookshelf</h1>
                    <button className="btn btn-info hover:bg-green-500 text-white mt-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;