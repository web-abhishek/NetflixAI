
import React from 'react'
import { IMG_URL } from '../utils/Constants'
import { Link } from 'react-router-dom'

const GptMovieLists = ({ poster_path, id, title }) => {
    if (!poster_path) return null;

    return (
        <Link to={`/movie/${id}`} className='group shrink-0 w-[260px] overflow-hidden rounded-2xl shadow-card transition duration-300 hover:-translate-y-1'>
            <div className='relative h-[260px] w-full overflow-hidden rounded-2xl'>
                <img
                    className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                    src={IMG_URL + poster_path}
                    alt={title}
                />
                <div className='absolute inset-0 bg-linear-to-t from-black to-transparent' />
            </div>
            <h3 className='mt-3 truncate text-base font-medium text-gray-200 font-manrope'>{title}</h3>
        </Link>
    )
}

export default GptMovieLists;