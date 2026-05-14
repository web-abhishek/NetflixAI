
import lang from '../hooks/languageConstants';
import { useSelector } from 'react-redux';
import { UseGptSearchMovie } from '../hooks/UseGptSearchMovie';


const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const { searchText, handleGptSearchClick } = UseGptSearchMovie();

  return (
    <div className='relative z-20 w-full px-4'>
      <form className='mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-4xl border border-white/10 bg-black/70 p-4 shadow-card backdrop-blur-xl md:flex-row'
        onSubmit={(e) => e.preventDefault()}>
        <input className='min-h-16 flex-1 rounded-2xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          autoComplete='off' />
        <button
          className='min-h-16 rounded-2xl bg-linear-to-r from-red-600 via-red-500 to-pink-600 px-6 text-base font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:brightness-110'
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
