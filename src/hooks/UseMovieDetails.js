import { useDispatch, useSelector } from "react-redux";
import {
    addMovieDetails,
    addMovieTrailer,
    addSimilarMovies
} from "../utils/movieDetailsSlice";
import { API_OPTION } from "../utils/Constants";
import { showLoader, hideLoader } from "../utils/loaderSlice";
import { useEffect } from "react";

const UseMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    const movieDetails = useSelector(
        (store) => store.movieDetails.details
    );

    useEffect(() => {
        if (!movieId) return;
        if (movieDetails) return;

        const fetchAllMovieDetails = async () => {
            dispatch(showLoader());

            try {
                const [detailsRes, trailerRes, similarRes] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
                        API_OPTION
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                        API_OPTION
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
                        API_OPTION
                    )
                ]);

                const detailsJson = await detailsRes.json();
                const trailerJson = await trailerRes.json();
                const similarJson = await similarRes.json();

                dispatch(addMovieDetails(detailsJson));
                dispatch(addMovieTrailer(trailerJson));
                dispatch(addSimilarMovies(similarJson));

            } catch (error) {
                console.error("Movie details fetch error:", error);
            } finally {
                dispatch(hideLoader());
            }
        };

        fetchAllMovieDetails();
    }, [movieId, movieDetails, dispatch]);
};

export default UseMovieDetails;
