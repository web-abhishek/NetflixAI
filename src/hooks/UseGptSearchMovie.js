import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTION } from '../utils/Constants';
import { addGptMovieResult } from '../utils/GptSearchSlice';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../utils/loaderSlice';

export const UseGptSearchMovie = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
            + movie +
            '&include_adult=false&language=en-US&page=1',
            API_OPTION)

        const json = await data.json()

        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        dispatch(showLoader());

        try {
            const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " +
                searchText.current.value +
                ". Only give me of 5 movies, comma separated like the given example: Sultan, Kick, Devdas, Dhurandhar, Pushpa";

            const gptResults = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: gptQuery },
                ],
                // max_tokens: 200
            });
            console.log(gptResults.choices);

            const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

            const promiseArray = gptMovies.map((movies) => searchMovieTMDB(movies));

            const tmdbResults = await Promise.all(promiseArray);
            console.log(tmdbResults);

            dispatch(addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults }));
        } catch (error) {
            console.error("GPT search error:", error);
        } finally {
            dispatch(hideLoader());
        }
    };

    return {
        searchText,
        handleGptSearchClick,
    };
}
