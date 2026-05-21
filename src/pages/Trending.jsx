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
        <div className='max-w-7xl mx-auto flex gap-5 flex-wrap'>
            {
                trendingMovies && trendingMovies.length > 0 ? (
                    trendingMovies.map((movie)=> <Mcard key={movie.id} movie={movie} />)
                ): (
                    <div className='text-center text-white py-24'>
                        Loading trending movies...
                    </div>
                )
            }
                    </div>
            }
    </div>
    )
}

export default Trending;