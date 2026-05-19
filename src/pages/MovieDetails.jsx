import React, { useEffect } from 'react'
import MovieDetailsText from '../components/MovieDetailsText';
import MovieDetailsVideo from '../components/MovieDetailsVideo';
import MovieDetailsShimmer from '../components/MovieDetailsShimmer';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovieDetails } from '../utils/movieDetailsSlice';
import { useParams } from 'react-router-dom';
import UseMovieDetails from '../hooks/UseMovieDetails';
import SimilarMovies from '../components/SimilarMovies';
import Header from '../components/Header';

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

    const details = movieAllDetails.details;
    const posterPath = details?.poster_path;
    const backdropPath = details?.backdrop_path;

    return (
        <div className='min-h-screen bg-[#050505] text-white'>
             
            <div className='relative'>
                <MovieDetailsVideo trailer={movieAllDetails.trailer} />
                {backdropPath && (
                    <div className='absolute inset-0 -z-10'>
                        <img
                            className='h-full w-full object-cover opacity-30'
                            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
                            alt={details?.title || 'Movie backdrop'}
                        />
                        <div className='absolute inset-0 bg-black/80' />
                    </div>
                )}
                <div className='relative mx-auto max-w-7xl px-6 py-10 lg:px-10'>
                    <div className='grid gap-8 lg:grid-cols-[360px_1fr]'>
                        {posterPath && (
                            <div className='rounded-3xl overflow-hidden shadow-card'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                                    alt={details?.title || 'Movie poster'}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                        )}
                        <div className='rounded-3xl border border-white/10 bg-black/60 p-8 shadow-card backdrop-blur-xl'>
                            <MovieDetailsText details={details} />
                        </div>
                    </div>
                    
                    <SimilarMovies similarMovies={movieAllDetails.similarMovies?.results} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;