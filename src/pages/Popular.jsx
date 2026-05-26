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
            {showGptSearch ? (
                <Gpt />
            ) : (
                <div className='min-h-screen bg-[#050505] text-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
                        <div className='pb-8 sm:pb-10 border-b border-white/10 mb-8'>
                            <p className='inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[.25em] text-gray-300 mb-3'>Popular</p>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-manrope mb-3">Popular Movies</h2>
                            <p className='max-w-3xl text-sm sm:text-base text-gray-400'>Dive into the world of cinema with our collection of popular movies that have captured the hearts of audiences worldwide.</p>
                        </div>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {popularMovies && popularMovies.length > 0 ? (
                                popularMovies.map((movie) => <Mcard key={movie.id} movie={movie} />)
                            ) : (
                                <div className='col-span-full text-center text-white py-24'>
                                    Loading popular movie...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Popular;