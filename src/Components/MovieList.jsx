import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  // console.log(title, movies);

  return (
    <div className='bg-black text-white'>
      <h2 className="font-bold text-2xl py-5"> {title} </h2>
      <div className='flex gap-5 overflow-x-auto scrollbar-hide'>
          {movies?.map((e) => (<MovieCard key={e.id} posterPath={e.poster_path} />))}
        </div>
    </div>
  )
}

export default MovieList;