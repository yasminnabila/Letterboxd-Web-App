import { BASE_URL } from "../actionTypes/actionTypes";

export function login(payload) {
  return (dispatch) => {
    return fetch(BASE_URL + `/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };
}

export function register(payload) {
  return (dispatch, getState) => {
    return fetch(BASE_URL + `movie/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(payload),
    });
  };
}
