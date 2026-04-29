
import { useSelector } from 'react-redux';
import { UseNowPlayingMovies } from '../hooks/UseNowPlayingMovies';
import { UsePopularMovies } from '../hooks/UsePopularMovies';
import { UseTopRatedMovies } from '../hooks/UseTopRatedMovies';
import Gpt from './Gpt';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import { UseUpcomingMovies } from '../hooks/UseUpcomingMovies';

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? <Gpt /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
      <Footer />
    </div>
  )
}

export default Browse;