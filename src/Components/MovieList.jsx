import React from 'react'
import MovieCard from './MovieCard'
import ShimmerLoader from './ShimmerLoader'
import { useSelector } from 'react-redux'

const MovieList = ({ title, movies }) => {
  const isLoading = useSelector((store) => store.loader.isLoading);
  // console.log(title, movies);

  return (
    <div className='text-gray-400 mx-10'>
      {/* <h2 className="font-extrabold text-2xl py-5 pt-7 font-manrope"> {title} </h2> */}
      {isLoading ? (
        <ShimmerLoader count={6} />
      ) : (
        <div className='flex gap-5 overflow-x-auto scrollbar-hide'>
          {movies?.map((e) => (<MovieCard key={e.id} posterPath={e.poster_path} movieId={e.id} title={e.title} />))}
        </div>
      )}
    </div>
  )
}

export default MovieList;