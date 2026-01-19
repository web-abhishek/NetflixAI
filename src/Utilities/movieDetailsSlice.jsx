import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        details: null,
        trailer: null,
        similarMovies: [],
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.details = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.trailer = action.payload
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload
        },
        clearMovieDetails: (state) => {
            state.details = null;
            state.trailer = null;
            state.similarMovies = [];
        },
    },
});


export const { addMovieDetails, addMovieTrailer, addSimilarMovies, clearMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;