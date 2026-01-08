import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utilities/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../Utilities/Constants";

export const UsePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION)
        const json = await data.json();

        // console.log(json.results); //20lists

        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
       !popularMovies && getPopularMovies();
    }, [])


}
