import { useSelector } from "react-redux";
import { UseNowPlayingMovies } from "../hooks/UseNowPlayingMovies";
import Mcard from "../components/Mcard";
import Gpt from '../components/Gpt';

const Trending = () => {
    UseNowPlayingMovies();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const trendingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    // console.log("Trending Movies:", trendingMovies);

    return (
        <div>
            {showGptSearch ? (
                <Gpt />
            ) : (
                <div className='min-h-screen bg-[#050505] text-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
                        <div className='pb-8 sm:pb-10 border-b border-white/10 mb-8'>
                            <p className='inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[.25em] text-gray-300 mb-3'>Trending</p>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-manrope mb-3">Trending Movies</h2>
                            <p className='max-w-3xl text-sm sm:text-base text-gray-400'>Explore the latest and most popular movies that are currently trending.</p>
                        </div>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {trendingMovies && trendingMovies.length > 0 ? (
                                trendingMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                            ) : (
                                <div className='col-span-full text-center text-white py-24'>
                                    Loading trending movies...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Trending;