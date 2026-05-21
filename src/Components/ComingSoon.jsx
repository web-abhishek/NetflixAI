import React from 'react'

const ComingSoon = () => {

    return (

        <div className='relative min-h-screen overflow-hidden bg-[#050505] text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.22),transparent_30%)]' />
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-center'>
        <div className='max-w-3xl space-y-4'>
          <p className='text-sm uppercase tracking-[0.35em] text-red-400'>We're working on something awesome. Check back soon!</p>
        </div>
      </div>
    </div>
    )
}

export default ComingSoon
