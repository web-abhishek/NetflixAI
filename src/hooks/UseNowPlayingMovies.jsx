import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utilities/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../Utilities/Constants";

export const UseNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
        const json = await data.json();

        // console.log(json.results); //20lists

        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])


}
