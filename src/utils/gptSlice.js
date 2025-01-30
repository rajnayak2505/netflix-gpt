import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        profileDropDown: false,
    },
    reducers: {
        toggleGptSearchView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        toggleProfileDropDown:(state) => {
            state.profileDropDown = !state.profileDropDown;
        },
        addGptMovieResult:(state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const {toggleGptSearchView, addGptMovieResult, toggleProfileDropDown} = gptSlice.actions;

export default gptSlice.reducer;