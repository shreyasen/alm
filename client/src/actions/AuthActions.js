import Cookies from "js-cookie";
import { authenticateUser } from "../apis";

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(loginStarted());

    authenticateUser(credentials)
      .then((res) => {
        Cookies.set("JWT-TOKEN", res.data.accessToken, {expires: 1/24});
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loginFailure(err.response.status));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    Cookies.remove("JWT-TOKEN");
    dispatch(sessionOut());
  }
}

const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    ...data,
  },
});

const loginStarted = () => ({
  type: "LOGIN_STARTED",
});

const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const sessionOut = () => ({
  type: "SESSION_OUT"
})
