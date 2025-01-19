const VideoTitle = ({title, overview}) => {
    return(
        <div className="absolute top-0 text-white bg-gradient-to-r from-black  h-screen">
            <div className="mt-64">
                <h1 className="text-5xl font-bold mb-7 ml-16">{title}</h1>
                <p className="text-lg w-1/3 mb-7 ml-16">{overview}</p>
            </div>
            <div className="ml-16">
                <button className=" bg-white text-black px-10 py-3 rounded-md mr-5 hover:bg-opacity-80 ">▶ Play</button>
                <button className="bg-gray-500 text-black px-10 py-3 rounded-md hover:bg-opacity-80 ">ℹ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;