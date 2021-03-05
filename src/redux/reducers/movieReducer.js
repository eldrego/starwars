import { movieConstants } from '../constants';
import initialState from './initialState';

const authReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case movieConstants.GET_MOVIES_SUCCESS:
      return {
        ...state,
        list: action.payload.results,
      };
    case movieConstants.GET_MOVIES_FAILURE:
      return {
        ...state,
        list: [],
      };
    case movieConstants.SET_MOVIE_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };
    case movieConstants.SET_MOVIE_FAILURE:
      return {
        ...state,
        current: {},
      };
    default:
      return state;
  }
};

export default authReducer;
