import * as actionTypes from "./actionTypes";

const initialState = {
  jwt: null,
  resError: false,
  errorMessage: null
};

const authSuccess = (state: any, action: any) => {
  return {
    ...state,
    jwt: action.jwt,
    resError: false
  };
};

const authFail = (state: any, action: any) => {
  let errorMessage: string;
  if (action.error === 401) {
    errorMessage = "Ошибка авторизации, проверьте данные и повторите попытку";
  } else {
    errorMessage = "Произошла ошибка, попробуйте повторите попытку позднее";
  }
  return {
    ...state,
    resError: true,
    errorMessage: errorMessage
  };
};

const reduser = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reduser;
