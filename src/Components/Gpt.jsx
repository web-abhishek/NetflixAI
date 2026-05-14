import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import NetflixBnr from '../assets/images/NetflixBnr.png'

const Gpt = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#050505] text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.22),transparent_30%)]' />
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-center'>
        <div className='max-w-3xl space-y-4'>
          <p className='text-sm uppercase tracking-[0.35em] text-red-400'>AI-powered movie finder</p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight'>Discover the perfect movie with NetflixAI + GPT.</h1>
          <p className='mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-8'>Enter a mood, genre, or plot idea and get smart movie recommendations instantly.</p>
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default Gpt;