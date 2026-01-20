import React from 'react'
import { IMG_URL } from '../Utilities/Constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ posterPath, movieId, title }) => {
  const navigate = useNavigate();

  const handleMovieDetails = () => {
    navigate(`/movie/${movieId}`);
  }

  if (!posterPath) return null;

  return (
    <div className="shrink-0 cursor-pointer" onClick={handleMovieDetails}>
      <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden">

        <img
          className="w-full h-auto object-cover bg-top"
          src={IMG_URL + posterPath}
          alt="card-images"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>

      </div>

      <h3 className="font-medium text-base text-gray-400 my-3 w-[250px] font-manrope">
        {title}
      </h3>
    </div>


  )
}

export default MovieCard;