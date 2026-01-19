const MovieDetailsText = ({details}) => {
    // console.log(details);

    if (!details) return null;

    const { title, overview, genres, vote_average } = details;
    // console.log(title);
    
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start gap-10">
                <h1> {title} </h1>
                <p>
  Genres: {genres?.map(g => g.name).join(" · ")}
</p>
            </div>
            <div className="flex gap-5">
                <p>Vote : { vote_average} out of 10</p>
            </div>
            <p> {overview} </p>
        </div>
    )
}
export default MovieDetailsText;
