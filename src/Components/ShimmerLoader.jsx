import React from 'react'

const ShimmerLoader = ({ count = 4 }) => {
    return (
        <div className='flex gap-5 overflow-x-auto scrollbar-hide'>
            {[...Array(count)].map((_, index) => (
                <div key={index} className='shrink-0'>
                    {/* Shimmer Image Card */}
                    <div className='w-[260px] h-[260px] rounded-2xl overflow-hidden bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer'></div>
                    
                    {/* Shimmer Title */}
                    <div className='mt-3 space-y-2'>
                        <div className='h-4 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer w-[250px]'></div>
                        <div className='h-3 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer w-[200px]'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShimmerLoader
