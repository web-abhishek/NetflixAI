
import { useSelector } from 'react-redux';
import { UseNowPlayingMovies } from '../hooks/UseNowPlayingMovies';
import { UsePopularMovies } from '../hooks/UsePopularMovies';
import { UseTopRatedMovies } from '../hooks/UseTopRatedMovies';
import Gpt from '../components/Gpt';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import Footer from '../components/Footer';
import { UseUpcomingMovies } from '../hooks/UseUpcomingMovies';

const Home = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();

  return (
    <div>
      {
        showGptSearch ? <Gpt /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Home;