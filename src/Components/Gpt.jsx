import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import NetflixBnr from '../assets/images/NetflixBnr.png'

const Gpt = () => {
  return (
    <div>
      <div className='relative'>
        <img src={NetflixBnr} alt='' />
        <GptSearchBar />
        <GptMovieSuggestion/>
      </div>
      
    </div>
  )
}

export default Gpt;