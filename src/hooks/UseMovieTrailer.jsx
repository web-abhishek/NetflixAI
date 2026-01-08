import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utilities/Constants";
import { addVideoPlaying } from "../Utilities/MoviesSlice";
import { useEffect } from "react";

const UseMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    const videoPlaying = useSelector(store=>store.movies.videoPlaying)
  
  const movieVideoData = async () => {
      const data = await (fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_OPTION));
    const json = await data.json();

    // console.log(json);
    const filterData = json.results.filter((e) => e.type == "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    // console.log(trailer);

    dispatch(addVideoPlaying(trailer))
  }
  useEffect(() => {
   !videoPlaying && movieVideoData();
  }, [])
}
export default UseMovieTrailer;