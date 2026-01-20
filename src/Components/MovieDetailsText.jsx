const MovieDetailsText = ({details}) => {
    // console.log(details);

    if (!details) return null;

    const { title, overview, genres, vote_average, original_language } = details;
    // console.log(title);
    
    return (
        <div className="flex flex-col gap-4 mx-30 my-15">
            <div className="flex justify-start gap-10 items-end">
                <h1 className="font-manrope text-4xl font-bold text-gray-200"> {title} </h1>
                <p className="text-base text-gray-400 font-inter">
   {genres?.map(g => g.name).join(" · ")}
</p>
            </div>
            <div className="flex gap-5">
                <p className="text-base text-gray-400 font-inter">Language : { original_language}</p>
                <p className="text-base text-gray-400 font-inter">Votes : { vote_average} out of 10</p>
            </div>
            <p className="text-base text-gray-400 w-2xl font-inter"> {overview} </p>
        </div>
    )
}
export default MovieDetailsText;
