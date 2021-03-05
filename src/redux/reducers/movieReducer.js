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
    // case movieConstants.LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     loggedIn: false,
    //   };
    default:
      return state;
  }
};

export default authReducer;
