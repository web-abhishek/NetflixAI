import React from 'react'
import MovieCard from './MovieCard';

const SimilarMovies = ({ similarMovies }) => {
  if (!similarMovies) return null;

  return (
    <div className='bg-black text-white'>
      <div className='flex gap-5 overflow-x-auto scrollbar-hide'>
          {similarMovies.map((e)=>(<MovieCard key={e.id} posterPath={e.poster_path} movieId={e.id} title={e.title} />))}
        </div>
    </div>
  )
}

export default SimilarMovies;