import { useSelector } from "react-redux";
import GptMovieLists from "./GptMovieLists";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector(store => store.gpt);

  return (
    <div className="px-4 py-8 flex flex-row flex-wrap gap-8">
      {movieName?.map((movie, index) => (
        <div key={movie} className="space-y-4">
          <div className="flex gap-5 items-center justify-start">
            {movieResults[index]?.map((movieItem) => (
              <GptMovieLists
                key={movieItem.id}
                poster_path={movieItem.poster_path}
                id={movieItem.id}
                title={movieItem.title}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;