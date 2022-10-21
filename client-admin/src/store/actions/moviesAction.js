import { SET_MOVIES, BASE_URL } from "../actionTypes/actionTypes";

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
        BASE_URL + `/movies?_expand=author&_expand=genre`
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

export function createMovie(movie) {
  return async function (dispatch) {
    try {
      const response = await fetch(BASE_URL + `/movies`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Movie is failed to load`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}
