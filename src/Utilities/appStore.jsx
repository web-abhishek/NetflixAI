import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./MoviesSlice";
import GptReducer from "./GptSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: GptReducer,
        config: configReducer,
    }
})

export default appStore;