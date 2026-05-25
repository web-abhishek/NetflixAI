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
            {
                showGptSearch ? <Gpt /> :
                    <div className='max-w-7xl mx-auto py-10'>
                        <div className='pb-10'>
                            <h2 className="text-gray-400 font-extrabold text-2xl py-5 pt-7 font-manrope">Trending Movies</h2>
                            <p className='text-gray-400'>
                                Explore the latest and most popular movies that are currently trending.
                            </p>
                        </div>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                trendingMovies && trendingMovies.length > 0 ? (
                                    trendingMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                                ) : (
                                    <div className='text-center text-white py-24'>
                                        Loading trending movies...
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Trending;