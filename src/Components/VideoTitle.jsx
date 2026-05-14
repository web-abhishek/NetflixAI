import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";


const VideoTitle = ({ title, overview, vote }) => {
    return (
        <div className='px-20 pt-92 absolute w-full aspect-video z-10 bg-linear-to-r from-black to-white-900'>
            <div className='w-xl text-white'>
                <div>
                    <h1 className='text-gray-300 font-extrabold text-6xl mb-7 font-manrope'>{title}</h1>
                    <p className='text-gray-500 text-sm mb-2 font-inter'>Rating {Math.floor(vote)} out of 10</p>
                    <p className='text-gray-400 leading-7.5 tracking-wide text-base mb-7 font-inter'>{overview}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 px-4 py-2 rounded-md font-manrope font-bold text-base cursor-pointer text-gray-200 bg-linear-60 from-red-800'><FaPlay /> Watch Now</button>

                </div>
            </div>
        </div>
    )
}

export default VideoTitle;