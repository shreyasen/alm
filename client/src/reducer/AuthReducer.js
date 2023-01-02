const initialState = {
  inProgress: false,
  isLoggedIn: false,
  token: null,
  isError: false,
  errorStatus: null,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_STARTED":
      return {
        ...state,
        inProgress: true,
        isLoggedIn: false,
        token: null,
        isError: false,
        errorStatus: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        token: action.payload,
        isError: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        inProgress: false,
        isLoggedIn: false,
        token: null,
        isError: true,
        errorStatus: action.payload,
      };
    case "SESSION_OUT":
      return initialState;
    default:
      return state;
  }
};
