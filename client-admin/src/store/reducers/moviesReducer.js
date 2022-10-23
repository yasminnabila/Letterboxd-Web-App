import { SET_MOVIES, SET_MOVIE_DETAIL } from "../actionTypes/actionTypes";

const initialState = {
  movies: [],
  movieDetail: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    default:
      return state;
  }
}

export default moviesReducer;
