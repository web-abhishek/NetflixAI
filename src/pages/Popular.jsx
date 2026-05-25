import { useSelector } from "react-redux";
import { UsePopularMovies } from "../hooks/UsePopularMovies";
import Mcard from "../components/Mcard";
import Gpt from '../components/Gpt';

const Popular = () => {
    UsePopularMovies();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const popularMovies = useSelector((store) => store.movies.popularMovies);
    console.log("Popular Movies:", popularMovies);

    return (
        <div>
            {
                showGptSearch ? <Gpt /> :
                    <div className='max-w-7xl mx-auto py-10'>
                        <div className='pb-10'>
                            <h2 className="text-gray-400 font-extrabold text-2xl py-5 pt-7 font-manrope">Popular Movies</h2>
                            <p className='text-gray-400'>
                                Dive into the world of cinema with our collection of popular movies that have captured the hearts of audiences worldwide.
                            </p>
                        </div>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                popularMovies && popularMovies.length > 0 ? (
                                    popularMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                                ) : (
                                    <div className='text-center text-white py-24'>
                                        Loading popular movie...
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Popular;