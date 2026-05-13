import React, { useEffect } from 'react'
import MovieDetailsText from './MovieDetailsText';
import MovieDetailsVideo from './MovieDetailsVideo';
import MovieDetailsShimmer from './MovieDetailsShimmer';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovieDetails } from '../utils/movieDetailsSlice';
import { useParams } from 'react-router-dom';
import UseMovieDetails from '../hooks/UseMovieDetails';
import SimilarMovies from './SimilarMovies';
import Header from './Header';

const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    UseMovieDetails(movieId);

    const movieAllDetails = useSelector((store) => store.movieDetails);
    const isLoading = useSelector((store) => store.loader.isLoading);
    
    console.log(movieAllDetails.details);
    // console.log(movieAllDetails.similarMovies.results);
    // console.log(movieAllDetails.trailer.results);
    
    
    useEffect(() => {
        return () => {
            dispatch(clearMovieDetails());
        };
    }, [])

    if (isLoading) return <MovieDetailsShimmer />;

    return (
        <div className='min-h-screen'>
            <MovieDetailsVideo trailer={movieAllDetails.trailer} />
            <MovieDetailsText details={movieAllDetails.details } />
            <SimilarMovies similarMovies={movieAllDetails.similarMovies.results} />
        </div>
    )
}

export default MovieDetails;