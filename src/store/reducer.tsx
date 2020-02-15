const initialState = {
  jwt: null
};

export const JWT_AUTH = "JWT_AUTH";

const reduser = (state = initialState, action: any) => {
  switch (action.type) {
    case JWT_AUTH:
      return {
        ...state,
        jwt: action.jwt
      };
    default:
      return state;
  }
};

export default reduser;