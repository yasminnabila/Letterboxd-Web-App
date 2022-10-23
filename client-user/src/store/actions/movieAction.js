import {
  SET_MOVIES,
  SET_MOVIE_DETAIL,
  BASE_URL,
} from "../actionTypes/actionType";
import Swal from "sweetalert2";

export function setMovies(data) {
  return {
    type: SET_MOVIES,
    payload: data,
  };
}

export function setMovieDetail(data) {
  return {
    type: SET_MOVIE_DETAIL,
    payload: data,
  };
}

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/public`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error(`Something's wrong!`);
      }

      const movies = await response.json();

      dispatch(setMovies(movies));
    } catch (error) {
      errorSwal(error);
    }
  };
}

export const movieDetail = (slug) => {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/public/detail?slug=${slug}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        response = await response.json();
        throw response.message;
      }
      const data = await response.json();
      dispatch(setMovieDetail(data));
    } catch (err) {
      errorSwal(err);
    }
  };
};

// function successSwal(message) {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: message,
//     showConfirmButton: false,
//     timer: 1500,
//   });
// }

function errorSwal(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}
