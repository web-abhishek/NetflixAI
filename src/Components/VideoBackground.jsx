import { useSelector } from 'react-redux';
import UseMovieTrailer from '../hooks/UseMovieTrailer';

const VideoBackground = ({ movieId }) => {
  // console.log(movieId)
    const videoPlaying = useSelector(store => store.movies?.videoPlaying)
  // console.log(videoPlaying);
  UseMovieTrailer(movieId);

  return (
    <div className='w-full'>
      <iframe className='relative w-full aspect-video'
        src={"https://www.youtube.com/embed/" + videoPlaying?.key + "?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&loop=1&playlist="+videoPlaying?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground;