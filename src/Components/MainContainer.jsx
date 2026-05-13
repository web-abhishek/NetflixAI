import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import MainContainerShimmer from './MainContainerShimmer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const isLoading = useSelector((store) => store.loader.isLoading);
    
    // if (movies === null) return;    
    if (!movies) return <MainContainerShimmer />;
    
    if (isLoading) return <MainContainerShimmer />;
    
    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {title, overview, id, vote_average} = mainMovie;
    return (
        <div>
            <VideoTitle title={title} overview={overview} vote={vote_average} />
            <VideoBackground movieId={ id } />
        </div>
    )
}

export default MainContainer