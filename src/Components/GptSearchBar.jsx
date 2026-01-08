
import lang from '../hooks/languageConstants';
import { useSelector } from 'react-redux';
import { UseGptSearchMovie } from '../hooks/UseGptSearchMovie';


const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  

  const { searchText, handleGptSearchClick } = UseGptSearchMovie();
  UseGptSearchMovie();

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded' onSubmit={(e)=> e.preventDefault()}>
        <input className='col-span-9 p-4 m-4 bg-white border-none'
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder} />
        <button
          className="col-span-3 m-4 bg-red-800 text-center rounded text-white text-xl font-bold opacity-100 cursor-pointer"
        onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
