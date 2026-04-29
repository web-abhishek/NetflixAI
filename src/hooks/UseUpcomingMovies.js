import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";

export const UseUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
        const json = await data.json();

        // console.log(json.results); //20lists

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])


}
