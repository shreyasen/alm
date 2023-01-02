import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AuthReducer } from '../reducer/AuthReducer';
import { GetUserReducer } from '../reducer/GetUserReducer';
import { courseReducer } from '../reducer/FindCourseReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ 
    auth: AuthReducer,
    user: GetUserReducer,
    courseReducer,
})
export default configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})