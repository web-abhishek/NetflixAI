import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./MoviesSlice";
import GptReducer from "./GptSearchSlice";
import configReducer from "./configSlice";
import loaderReducer from "./loaderSlice";
import movieDetailsReducer from "./movieDetailsSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: GptReducer,
        config: configReducer,
        loader: loaderReducer,
        movieDetails: movieDetailsReducer,
    }
})

export default appStore;