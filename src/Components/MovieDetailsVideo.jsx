import React from 'react'

const MovieDetailsVideo = ({ trailer }) => {
  // console.log(trailer);

  if (!trailer?.results?.length) return null;

  const bestTrailer = trailer?.results?.find(
    (e) => e.type === "Trailer" && e.site === "YouTube"  && e.official);

  if (!bestTrailer) return null;

  return (
    <div className='w-5xl mx-auto rounded-4xl overflow-hidden'>
      <iframe className='relative w-full aspect-video'
        src={"https://www.youtube.com/embed/" + bestTrailer?.key + "?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&loop=1&playlist=" + bestTrailer?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>
  )
}

export default MovieDetailsVideo;