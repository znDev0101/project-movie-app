import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getApiMoviePopular = 'https://api.themoviedb.org/3/movie/popular?api_key=4d234558346dfa39b575a1e7ac111995&language=en-US&page=1';
const getApiMovieTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4d234558346dfa39b575a1e7ac111995&language=en-US&page=1';
const getApiDetails = `https://api.themoviedb.org/3/movie`;

//GET MOVIE POPULAR
export const getMoviePopular = createAsyncThunk('movie/getMoviePopular', async (reject) => {
  try {
    const response = await fetch(getApiMoviePopular);
    const responseJson = await response.json();
    const results = await responseJson.results;
    return results;
  } catch (error) {
    return reject.rejectWithValue(error);
  }
});

// GET MOVIE TOP RATED
export const getMovieTopRated = createAsyncThunk('movie/movieTopRated', async (reject) => {
  try {
    const response = await fetch(getApiMovieTopRated);
    const responseJson = await response.json();
    const results = await responseJson.results;
    console.log(results);
    return results;
  } catch (error) {
    return reject.rejectWithValue(error);
  }
});

// GET DETAILS
export const getDetails = createAsyncThunk('details/getDetails', async (name) => {
  console.log(`your name = ${name}`);
  // try {
  //   const response = await fetch(`${getApiDetails}/${name}?api_key=4d234558346dfa39b575a1e7ac111995&language=en-US`);
  //   const responseJson = await response.json();
  //   const results = await responseJson.results;
  //   console.log(results);
  //   return results;
  // } catch (error) {
  //   console.log(error);
  // }
});

const initialState = {
  moviePopular: [],
  movieTopRated: [],
  getResultsDetails: [],
  isLoading: false,
  error: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: {
    // MOVIE POPULAR
    [getMoviePopular.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.moviePopular = action.payload;
    },
    [getMoviePopular.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getMoviePopular.rejected]: (state) => {
      state.isLoading = false;
      state.moviePopular = false;
      state.error = true;
    },
    // MOVIE TOP RATED
    [getMovieTopRated.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.movieTopRated = action.payload;
    },
    [getMovieTopRated.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getMovieTopRated.rejected]: (state) => {
      state.isLoading = false;
      state.movieTopRated = false;
      state.error = true;
    },

    // GET DETAILS
    [getDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.getResultsDetails = action.payload;
    },
    [getDetails.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
      state.getResultsDetails = false;
    },
    [getDetails.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.getResultsDetails = false;
    },
  },
});
// GET MOVIE POPULAR
export const getMoviePopularAllData = (state) => state.movie.moviePopular;
export const moviePopularPending = (state) => state.movie.isLoading;
export const moviePopularRejected = (state) => state.movie.error;
// GET MOVIE TOP RATED
export const getMovieTopRatedAllData = (state) => state.movie.movieTopRated;
export const movieTopRatedPending = (state) => state.movie.isLoading;
export const movieTopRatedRejected = (state) => state.movie.error;

// GET DETAILS API
export const getResultsApiDetails = (state) => state.movie.getResultsDetails;
export const detailsPending = (state) => state.movie.isLoading;
export const detailsRejected = (state) => state.movie.error;

export default movieSlice.reducer;
