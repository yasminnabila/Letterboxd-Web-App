import {
  SET_MOVIES,
  SET_MOVIE_DETAIL,
  BASE_URL,
  SET_LOADING,
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

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading: loading,
  };
}

export function fetchMovies() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(BASE_URL + `/public`);

      if (!response.ok) {
        throw new Error(`Something's wrong!`);
      }

      const movies = await response.json();

      dispatch(setMovies(movies));
    } catch (error) {
      console.log(error);
      errorSwal(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

// export function movieDetail(id) {
//   return async (dispatch) => {
//     try {
//       console.log("masuk nih ke movieDetail");
//       dispatch(setLoading(true));
//       let response = await fetch(BASE_URL + `/public/${id}`);

//       if (!response.ok) {
//         throw new Error(`Something's wrong!`);
//       }

//       const data = await response.json();
//       dispatch(setMovieDetail(data));
//     } catch (error) {
//       console.log(error);
//       errorSwal(error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// }

export const movieDetail = (slug) => {
  return async (dispatch) => {
    try {
      console.log("trigger");
      const response = await fetch(BASE_URL + `/public/detail?slug=${slug}`);
      console.log(response, "ini di store");
      if (!response.ok) throw new Error("Internal Service Error");
      const data = await response.json();
      dispatch(setMovieDetail(data));
    } catch (error) {
      console.log(error);
      errorSwal(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

function errorSwal(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}
