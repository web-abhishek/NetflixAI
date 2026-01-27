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
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer;