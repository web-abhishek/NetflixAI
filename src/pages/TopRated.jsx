import React, { use } from 'react'
import { useSelector } from 'react-redux'

const TopRated = () => {
  const topRated = useSelector(store => store.movies.topRatedMovies);
  console.log(topRated);
  return (
    <div></div>
  )
}

export default TopRated