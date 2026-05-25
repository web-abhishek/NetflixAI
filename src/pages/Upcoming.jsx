import { useSelector } from "react-redux";
import { UseUpcomingMovies } from "../hooks/UseUpcomingMovies";
import Mcard from "../components/Mcard";
import Gpt from '../components/Gpt';

const Upcoming = () => {
    UseUpcomingMovies();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    console.log("Upcoming Movies:", upcomingMovies);

    return (
        <div>
            {
                showGptSearch ? <Gpt /> :
                    <div className='max-w-7xl mx-auto py-10'>
                        <div className='pb-10'>
                            <h2 className="text-gray-400 font-extrabold text-2xl py-5 pt-7 font-manrope">Upcoming Movies</h2>
                            <p className='text-gray-400'>
                                Be the first to know about the latest movie releases.
                            </p>
                        </div>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                upcomingMovies && upcomingMovies.length > 0 ? (
                                    upcomingMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                                ) : (
                                    <div className='text-center text-white py-24'>
                                        Loading upcoming movie...
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Upcoming;