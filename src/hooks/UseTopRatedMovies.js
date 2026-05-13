import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";
import { showLoader, hideLoader } from "../utils/loaderSlice";

export const UseTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async () => {
        dispatch(showLoader());
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTION)
            const json = await data.json();

            // console.log(json.results); //20lists

            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("Error fetching top rated movies:", error);
        } finally {
            dispatch(hideLoader());
        }
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [])


}
