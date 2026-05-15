import React from 'react'
import { IMG_URL } from '../utils/Constants'
import { Link } from 'react-router-dom'

const MovieCard = ({ posterPath, movieId, title }) => {
  if (!posterPath) return null;

  return (
    <Link to={`/movie/${movieId}`} className='group shrink-0 w-[260px] overflow-hidden rounded-2xl shadow-card transition duration-300 hover:-translate-y-1'>
      <div className='relative h-auto w-full overflow-hidden rounded-2xl'>
        <div className='absolute top-0 left-0 inset-0 bg-linear-to-t from-black to-transparent z-10' />
        <img
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
          src={IMG_URL + posterPath}
          alt={title}
        />
      </div>
      <h3 className='mt-3 px-3 truncate text-base font-medium text-gray-200 font-manrope text-wrap'>{title}</h3>
    </Link>
  )
}

export default MovieCard;