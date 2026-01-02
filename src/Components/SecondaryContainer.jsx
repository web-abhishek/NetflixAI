import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  // console.log(movies);
  

  return (
    <div className='relative'>
      <MovieList title={ "Now Playing" } movies={movies.nowPlayingMovies} />
      <MovieList title={ "Popular Movies" } movies={movies.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
    </div>
  )
}

export default SecondaryContainer;