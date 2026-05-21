import React from 'react'
import { useSelector } from 'react-redux'
import { UseTopRatedMovies } from '../hooks/UseTopRatedMovies'
import Mcard from '../components/Mcard'
import Gpt from '../components/Gpt';

const TopRated = () => {
  UseTopRatedMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  // console.log("Top Rated Movies:", topRatedMovies);

  return (
    <div>
      {
        showGptSearch ? <Gpt /> :
          <div className='max-w-7xl mx-auto flex gap-5 flex-wrap'>
            {topRatedMovies && topRatedMovies.length > 0 ? (
              topRatedMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
            ) : (
              <div className='text-center text-white py-24'>
                Loading top rated movie...
              </div>
            )}
          </div>
    }
    </div>
  )

}

export default TopRated;