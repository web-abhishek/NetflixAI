import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";


const VideoTitle = ({ title, overview, vote }) => {
    return (
        <div className='w-full lg:aspect-video relative p-4 sm:p-6 md:p-8 lg:p-12 flex items-end sm:items-center static lg:absolute z-10 bottom-0 left-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/80 to-transparent lg:from-black lg:via-black/50 lg:to-transparent'>
            <div className='w-full sm:w-3xl md:w-4xl text-white'>
                <div>
                    <h1 className='text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-5 font-manrope line-clamp-2 sm:line-clamp-3'>{title}</h1>
                    <p className='text-gray-300 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 font-inter'>Rating {Math.floor(vote)}/10</p>
                    <p className='text-gray-300 leading-5 sm:leading-6 md:leading-7 tracking-wide text-xs sm:text-sm md:text-base mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-4 font-inter'>{overview}</p>
                </div>
                {/* <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 px-4 py-2 rounded-md font-manrope font-bold text-base cursor-pointer text-gray-200 bg-linear-60 from-red-800'><FaPlay /> Watch Now</button>

                </div> */}
            </div>
        </div>
    )
}

export default VideoTitle;