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
      {showGptSearch ? (
        <Gpt />
      ) : (
        <div className='min-h-screen bg-[#050505] text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
            <div className='pb-8 sm:pb-10 border-b border-white/10 mb-8'>
              <p className='inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[.25em] text-gray-300 mb-3'>Top Rated</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-manrope mb-3">Top Rated Movies</h2>
              <p className='max-w-3xl text-sm sm:text-base text-gray-400'>Discover the most beloved films of all time, curated by our audience.</p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {topRatedMovies && topRatedMovies.length > 0 ? (
                topRatedMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
              ) : (
                <div className='col-span-full text-center text-white py-24'>
                  Loading top rated movie...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default TopRated;