const MovieDetailsText = ({details}) => {
    // console.log(details);

    if (!details) return null;

    const { title, overview, genres, vote_average, original_language } = details;
    // console.log(title);
    
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-4">
                <h1 className="font-manrope text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 font-inter">{genres?.map(g => g.name).join(' · ')}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                <span className="rounded-full bg-white/10 px-3 py-1.5 sm:py-2 font-medium">Language: {original_language.toUpperCase()}</span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 sm:py-2 font-medium">⭐ {vote_average.toFixed(1)}/10</span>
            </div>
            <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-gray-300 max-w-3xl font-inter">{overview}</p>
        </div>
    )
}
export default MovieDetailsText;
