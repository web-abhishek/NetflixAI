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
                    <div className='max-w-7xl mx-auto flex gap-5 flex-wrap'>
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
            }
            </div>
    )
}

export default Upcoming;