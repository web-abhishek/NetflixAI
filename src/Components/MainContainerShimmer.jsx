import React from 'react'

const MainContainerShimmer = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* Video background shimmer */}
      <div className='w-full h-[80vh] bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer'></div>
      
      {/* Title area shimmer */}
      <div className='absolute bottom-20 left-10 space-y-4'>
        <div className='h-12 w-96 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
        <div className='h-4 w-full bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
        <div className='h-4 w-5/6 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer'></div>
      </div>
    </div>
  )
}

export default MainContainerShimmer
