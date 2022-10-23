import { SET_MOVIES, BASE_URL } from "../actionTypes/actionTypes";
import Swal from "sweetalert2";

export function setMovies(data) {
  return {
    type: SET_MOVIES,
    payload: data,
  };
}

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/movies`, {
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

export function createMovie(movie) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/movies`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        response = await response.json();
        throw response.message;
      }
      successSwal("New movie is created successfully");
      dispatch(fetchMovies());
    } catch (error) {
      errorSwal(error);
    }
  };
}

function successSwal(message) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

function errorSwal(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

// function confirmSwal() {
//   return Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, I'm sure!",
//   });
// }
