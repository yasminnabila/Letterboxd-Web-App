import { SET_GENRES, BASE_URL } from "../actionTypes/actionTypes";

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

export function createGenre(genre) {
  return async function (dispatch) {
    try {
      const response = await fetch(BASE_URL + `/genres`, {
        method: "POST",
        body: JSON.stringify(genre),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Genre is failed to add`);
      }
      // const data = await response.json();
      // console.log(data);
      dispatch(fetchGenres())
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteGenre = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      await fetch(BASE_URL + "/categories/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem(`access_token`),
        },
        // body: JSON.stringify(id)
      });
      dispatch(fetchGenres());
    } catch (error) {
      console.log(error);
    }
  };
};
