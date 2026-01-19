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
    <div className="w-[200px] h-[300px] shrink-0 cursor-pointer" onClick={handleMovieDetails}>
      <img
        className="w-full h-full object-cover rounded-lg"
        src={IMG_URL + posterPath}
        alt="card-images"
      />
      <h3>{ title }</h3>
    </div>
  )
}

export default MovieCard;