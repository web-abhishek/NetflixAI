import { useSelector } from "react-redux";
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  // const gpt = useSelector(store => store.gpt);
  // const { movieName, movieResults } = gpt;
  const { movieName, movieResults } = useSelector(store => store.gpt);
  
  return (
    <div className="absolute z-9 w-full top-[40%] bg-linear-60 from-red-800 to-black">
      {
      movieName?.map((movie, index)=> (<MovieList key={movie} title={movie} movies={movieResults[index]} />))
      }
    </div>
  )
}

export default GptMovieSuggestion;