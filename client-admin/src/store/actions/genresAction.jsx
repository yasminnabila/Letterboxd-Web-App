import { SET_GENRES } from "../actionTypes/actionTypes";

export function setGenres(data) {
  return {
    type: SET_GENRES,
    payload: data,
  };
}

export function fetchGenres() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/genres");

      if (!response.ok) {
        throw new Error(`Something's wrong!`);
      }

      const genres = await response.json();

      dispatch(setGenres(genres));
    } catch (error) {
      console.log(error);
    }
  };
}
