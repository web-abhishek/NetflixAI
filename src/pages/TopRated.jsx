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
          <div className='max-w-7xl mx-auto py-10'>
            <div className='pb-10'>
              <h2 className="text-gray-400 font-extrabold text-2xl py-5 pt-7 font-manrope">Top Rated Movies</h2>
              <p className='text-gray-400'>
                Discover the most beloved films of all time, curated by our audience.
              </p>
            </div>
            
          <div className='flex gap-5 flex-wrap'>
            {topRatedMovies && topRatedMovies.length > 0 ? (
              topRatedMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
            ) : (
              <div className='text-center text-white py-24'>
                Loading top rated movie...
              </div>
            )}
            </div>
            </div>
    }
    </div>
  )

}

export default TopRated;