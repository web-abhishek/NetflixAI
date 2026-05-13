import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";
import { showLoader, hideLoader } from "../utils/loaderSlice";

export const UseNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        dispatch(showLoader());
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
            const json = await data.json();

            // console.log(json); //20lists

            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        } finally {
            dispatch(hideLoader());
        }
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])


}
