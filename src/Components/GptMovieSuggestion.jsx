import { useSelector } from "react-redux";
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  // const gpt = useSelector(store => store.gpt);
  // const { movieName, movieResults } = gpt;
  const { movieName, movieResults } = useSelector(store => store.gpt);
  
  return (
    <div className="bg-black bg-opacity-20 text-white">
      {
      movieName?.map((movie, index)=> (<MovieList key={movie} title={movie} movies={movieResults[index]} />))
      }
    </div>
  )
}

export default GptMovieSuggestion;