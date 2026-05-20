import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',

    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        videoPlaying: null,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },

        addVideoPlaying: (state, action) => {
            state.videoPlaying = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addVideoPlaying, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
