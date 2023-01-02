import { getUserDetails } from "../apis";

export const getUser = () => async(dispatch) => {
    dispatch(getUserStarted());
    try {
      const { data } = await getUserDetails();
      dispatch(getUserSuccess(data));
    } catch (error) {
      dispatch(getUserFailure(error.response.status));
    }
  // return (dispatch) => {
  //   dispatch(getUserStarted());

  //   getUserDetails()
  //     .then((res) => {
  //       dispatch(getUserSuccess(res.data));
  //     })
  //     .catch((err) => {
  //       dispatch(getUserFailure(err.response.status));
  //     });
  // };
};

const getUserStarted = () => ({
  type: "GET_USER_STARTED",
});

const getUserSuccess = (data) => ({
  type: "GET_USER_SUCCESS",
  payload: data,
});

const getUserFailure = (error) => ({
  type: "GET_USER_FAILURE",
  payload: error,
});
