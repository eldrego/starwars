import Axios from 'axios';
import { movieConstants } from '../constants';

const proxy = (resource) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://swapi.dev/api/${resource}`,
  )}`;
};

const getMoviesSuccess = (payload) => ({
  type: movieConstants.GET_MOVIES_SUCCESS,
  payload,
});

const getMoviesFailure = (error) => ({
  type: movieConstants.GET_MOVIES_FAILURE,
  payload: error,
});

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(proxy('films'));
    dispatch(getMoviesSuccess(JSON.parse(data.contents)));
  } catch (error) {
    dispatch(getMoviesFailure(error));
  }
};

const setCurrentMovieSuccess = (payload) => ({
  type: movieConstants.SET_MOVIE_SUCCESS,
  payload,
});

const setCurrentMovieFailure = (error) => ({
  type: movieConstants.SET_MOVIE_FAILURE,
  payload: error,
});

export const setCurrentMovie = (movie) => async (dispatch) => {
  try {
    dispatch(setCurrentMovieSuccess(movie));
  } catch (error) {
    dispatch(setCurrentMovieFailure(error));
  }
};
