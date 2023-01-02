const initialState = {
  inProgress: false,
  userDetails: null,
  isError: false,
  errorStatus: null,
};

export const GetUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_STARTED":
      return { ...state, inProgress: true, isError: false, errorStatus: null };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        inProgress: false,
        userDetails: action.payload,
        isError: false,
        errorStatus: null,
      };
    case "GET_USER_STARTED":
      return {
        ...state,
        inProgress: true,
        userDetails: null,
        isError: true,
        errorStatus: action.payload,
      };
    default:
      return state;
  }
};
