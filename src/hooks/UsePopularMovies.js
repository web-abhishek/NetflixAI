import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";
import { showLoader, hideLoader } from "../utils/loaderSlice";

export const UsePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        dispatch(showLoader());
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION)
            const json = await data.json();

            // console.log(json.results); //20lists

            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        } finally {
            dispatch(hideLoader());
        }
    }

    useEffect(() => {
       !popularMovies && getPopularMovies();
    }, [])


}
