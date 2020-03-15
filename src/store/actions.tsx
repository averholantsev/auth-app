import * as actionTypes from "./actionTypes";
import axios from "../axios-main";

export const authSuccess = (jwt: string) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    jwt: jwt
  };
};

export const authFail = (error: any) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email: string, password: string, rememberMe: boolean) => {
  const dataToServer = {
    email: email,
    password: password,
    rememberMe: rememberMe
  };

  return (dispatch: any) => {
    axios
      .post("/314145ed-4ccd-46fd-a1f9-f5b83468e714", dataToServer)
      .then(response => {
        dispatch(authSuccess(response.data.jwt));
      })
      .catch(error => {
        dispatch(authFail(error.response.status));
      });
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
