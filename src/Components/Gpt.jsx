import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import NetflixBnr from '../assets/images/NetflixBnr.jpg'

const Gpt = () => {
  return (
    <div>
      <div className='absolute -z-10'>
              <img src={NetflixBnr} alt='' />
            </div>
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  )
}

export default Gpt;