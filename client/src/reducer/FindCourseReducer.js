const initialState = {
    inProgress: false,
    courseDetails: null,
    isError: false,
    errorStatus: null,
}

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_COURSE_BEGIN":
            return { ...state, inProgress: true, isError: false, errorStatus: null }
        case "FIND_COURSE_SUCCESS":
            return { ...state, inProgress: false, courseDetails: action.payload, isError: false, errorStatus: null }
        case "FIND_COURSE_ERROR":
            return { ...state, inProgress: false, courseDetails: null, isError: true, errorStatus: action.payload }
        case "RESET_COURSE_DETAILS":
            return initialState;
        default:
            return state;
    }
}