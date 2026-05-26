import React from 'react'
import { IMG_URL } from '../utils/Constants'
import { Link } from 'react-router-dom'

const Mcard = ({ movie }) => {
    const { original_title, poster_path, id } = movie;
    
    // console.log("Movie in Mcard:", movie, "original_title:", original_title);
  if (!poster_path) return null;
  
    return (
    <Link to={`/movie/${id}`} className='group w-full overflow-hidden rounded-3xl shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl'>
      <div className='overflow-hidden rounded-3xl bg-slate-950/50'>
        <div className='relative aspect-[2/3] w-full overflow-hidden'>
          <img
            className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
            src={IMG_URL + poster_path}
            alt={original_title}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
        </div>
        <div className='px-4 py-4 sm:px-5 sm:py-5'>
          <h3 className='line-clamp-2 text-sm sm:text-base font-semibold text-white font-manrope'>{original_title}</h3>
        </div>
      </div>
    </Link>
    )
}

export default Mcard;