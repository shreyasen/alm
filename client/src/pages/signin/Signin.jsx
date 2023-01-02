import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_NAMES } from "../../router/RouteNames";
import { login } from "../../actions/AuthActions";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isError = useSelector(state => state.auth.isError);
  const errorStatus = useSelector(state => state.auth.errorStatus);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTE_NAMES.root);
    }
  },[isLoggedIn]);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <div className="form-box">
      <div className="form-header">Login to your ALM account</div>
      <div className="form-header-text">
        Don&apos;t have an ALM account?{" "}
        <Link to="/signup">Create a new account</Link>
      </div>
      <form>
      {isError && errorStatus === 403 && <p className="error-text">Username or password incorrect!</p>}
        <div>
          <input
            type={"email"}
            placeholder={"Email"}
            value={credentials.email}
            name={"email"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"Password"}
            value={credentials.password}
            name={"password"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <button onClick={handleSignin} className="form-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signin;
