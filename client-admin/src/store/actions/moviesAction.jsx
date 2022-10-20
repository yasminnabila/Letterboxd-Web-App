import { SET_MOVIES } from "../actionTypes/actionTypes";

export function setMovies(data) {
  return {
    type: SET_MOVIES,
    payload: data,
  };
}

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:4000/movies?_expand=author&_expand=genre`
      );

      if (!response.ok) {
        throw new Error(`Something's wrong!`);
      }

      const movies = await response.json();

      dispatch(setMovies(movies));
    } catch (error) {
      console.log(error);
    }
  };
}
