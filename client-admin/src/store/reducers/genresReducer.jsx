import { SET_GENRES, SET_LOADING } from "../actionTypes/actionTypes";

const initialState = {
  genres: [],
};

function genresReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}

export default genresReducer;
