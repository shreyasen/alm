import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { ROUTE_NAMES } from "../router/RouteNames";
import { getUser } from "../actions/GetUserActions";
import { sessionOut } from "../actions/AuthActions";

const Common = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if(Cookies.get("JWT-TOKEN")) {
      dispatch(getUser());
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!Cookies.get("JWT-TOKEN") && window.location.pathname !== ROUTE_NAMES.signup) {
      dispatch(sessionOut());
      navigate(ROUTE_NAMES.signin);
    }
  }, [navigate]);

  return null;
};
export default Common;
