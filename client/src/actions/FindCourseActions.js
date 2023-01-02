import { findCourse } from "../apis";

export const findCourseAC = (code) => {
  return (dispatch) => {
    dispatch(findCourseBegin());

    findCourse(code)
      .then((res) => {
        dispatch(findCourseSuccess(res.data));
      })
      .catch((err) => {
        dispatch(findCourseError(err.response.status));
      });
  };
};

const findCourseBegin = () => ({
  type: "FIND_COURSE_BEGIN",
});

const findCourseSuccess = (data) => ({
  type: "FIND_COURSE_SUCCESS",
  payload: data,
});

const findCourseError = (err) => ({
  type: "FIND_COURSE_ERROR",
  payload: err,
});

export const resetCourseDetails = () => ({
  type: "RESET_COURSE_DETAILS"
});
