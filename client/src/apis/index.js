import axios from 'axios';
import Cookies from 'js-cookie';
import API_ENDPOINTS from '../constants/apiEndPoints';

const url = 'http://localhost:5000/alm';

export const authenticateUser = (credentials) => axios.post(url+API_ENDPOINTS.auth, credentials);
export const getUserDetails = () => axios.get(url+API_ENDPOINTS.getUser, {
    headers: { Authorization: `Bearer ${Cookies.get("JWT-TOKEN")}` },
});
export const findCourse = (code) => axios.get(url+API_ENDPOINTS.findCourse.replace('{code}', code), {
    headers: { Authorization: `Bearer ${Cookies.get("JWT-TOKEN")}` },
});
export const getEnrollments = () => axios.get(url+API_ENDPOINTS.getEnrollments, {
    headers: { Authorization: `Bearer ${Cookies.get("JWT-TOKEN")}` },
})