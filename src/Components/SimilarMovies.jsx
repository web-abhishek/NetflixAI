import React from 'react'
import MovieCard from './MovieCard';

const SimilarMovies = ({ similarMovies }) => {
  if (!similarMovies) return null;

  return (
    <div className='text-gray-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0'>
      <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl py-4 sm:py-5 font-manrope text-white">You May Like</h2>
      <div className='flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-hide'>
          {similarMovies.map((e)=>(<MovieCard key={e.id} posterPath={e.poster_path} movieId={e.id} title={e.title} />))}
        </div>
    </div>
  )
}

export default SimilarMovies;