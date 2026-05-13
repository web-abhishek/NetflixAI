import React from 'react'

const MovieDetailsShimmer = () => {
  return (
    <div className='min-h-screen bg-black'>
      {/* Video background shimmer */}
      <div className='w-full h-[50vh] bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer'></div>
      
      {/* Details shimmer */}
      <div className='mx-30 my-15 space-y-6'>
        {/* Title */}
        <div className='space-y-4'>
          <div className='h-10 w-96 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
          <div className='h-5 w-48 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
        </div>

        {/* Metadata */}
        <div className='space-y-3'>
          <div className='h-4 w-64 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
          <div className='h-4 w-64 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
        </div>

        {/* Overview */}
        <div className='space-y-2'>
          <div className='h-4 w-full bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
          <div className='h-4 w-full bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
          <div className='h-4 w-3/4 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsShimmer
