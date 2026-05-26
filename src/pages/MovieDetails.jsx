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
import Gpt from '../components/Gpt';

const MovieDetails = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    <div>
        {
        showGptSearch ? <Gpt /> :
        <div className='min-h-screen bg-[#050505] text-white'> 
                        <div className='relative'>
                            <div className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12'>
                    <div className='grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]'>
                        {posterPath && (
                            <div className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-card mx-auto md:mx-0 w-full md:w-auto'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                                    alt={details?.title || 'Movie poster'}
                                    className='h-full w-full sm:w-80 md:w-72 lg:w-80 object-cover aspect-[2/3]'
                                />
                            </div>
                        )}
                        <div className='rounded-2xl sm:rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 shadow-card backdrop-blur-xl'>
                            <MovieDetailsText details={details} />
                        </div>
                    </div>
                    <MovieDetailsVideo trailer={movieAllDetails.trailer} />
                {backdropPath && (
                    <div className='absolute inset-0 -z-10 hidden sm:block'>
                        <img
                            className='h-full w-full object-cover opacity-20'
                            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
                            alt={details?.title || 'Movie backdrop'}
                        />
                        <div className='absolute inset-0 bg-black/70' />
                    </div>
                )}
                    <SimilarMovies similarMovies={movieAllDetails.similarMovies?.results} />
                </div>
                
            </div>
        </div>
            }
            </div>
    )
}

export default MovieDetails;