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
            {showGptSearch ? (
                <Gpt />
            ) : (
                <div className='min-h-screen bg-[#050505] text-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
                        <div className='pb-8 sm:pb-10 border-b border-white/10 mb-8'>
                            <p className='inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[.25em] text-gray-300 mb-3'>Upcoming</p>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-manrope mb-3">Upcoming Movies</h2>
                            <p className='max-w-3xl text-sm sm:text-base text-gray-400'>Be the first to know about the latest movie releases.</p>
                        </div>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {upcomingMovies && upcomingMovies.length > 0 ? (
                                upcomingMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                            ) : (
                                <div className='col-span-full text-center text-white py-24'>
                                    Loading upcoming movie...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Upcoming;