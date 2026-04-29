import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addVideoPlaying } from "../utils/MoviesSlice";
import { showLoader, hideLoader } from "../utils/loaderSlice";
import { useEffect } from "react";

const UseMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const videoPlaying = useSelector((store) => store.movies.videoPlaying);

  const movieVideoData = async () => {
    dispatch(showLoader());

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTION
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (e) => e.type === "Trailer"
      );
      const trailer = filterData.length
        ? filterData[0]
        : json.results[0];

      dispatch(addVideoPlaying(trailer));
    } catch (error) {
      console.error("Trailer fetch error:", error);
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    if (!videoPlaying && movieId) {
      movieVideoData();
    }
  }, [movieId]);

};

export default UseMovieTrailer;
