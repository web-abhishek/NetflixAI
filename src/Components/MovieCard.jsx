import React from 'react'
import { IMG_URL } from '../Utilities/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-[200px] h-[300px] shrink-0">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={IMG_URL + posterPath}
        alt="card-images"
      />
    </div>
  )
}

export default MovieCard;