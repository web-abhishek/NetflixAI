const MovieDetailsText = ({details}) => {
    // console.log(details);

    if (!details) return null;

    const { title, overview, genres, vote_average, original_language } = details;
    // console.log(title);
    
    return (
        <div className="flex flex-col gap-6">
            <div className="space-y-4">
                <h1 className="font-manrope text-4xl font-bold text-white">{title}</h1>
                <p className="text-base text-gray-300 font-inter">{genres?.map(g => g.name).join(' · ')}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="rounded-full bg-white/5 px-3 py-2">Language: {original_language}</span>
                <span className="rounded-full bg-white/5 px-3 py-2">Votes: {vote_average} / 10</span>
            </div>
            <p className="text-base leading-8 text-gray-300 max-w-3xl font-inter">{overview}</p>
        </div>
    )
}
export default MovieDetailsText;
