import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.scss";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/alm/user", userInfo, {
        "Content-Type": "application/json",
      })
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-box">
      <div className="form-header">Create your ALM account</div>
      <div className="form-header-text">
        Already have an account? <Link to="/signin">Log In</Link>
      </div>
      <form>
        <div>
          <input
            type={"text"}
            placeholder={"First Name"}
            value={userInfo.firstName}
            name={"firstName"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <input
            type={"text"}
            placeholder={"Last Name"}
            value={userInfo.lastName}
            name={"lastName"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <input
            type={"email"}
            placeholder={"Email"}
            value={userInfo.email}
            name={"email"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"Password"}
            value={userInfo.password}
            name={"password"}
            onChange={handleInputChange}
            className="input-text"
          />
        </div>
        <div>
          <button onClick={handleSignup} className="form-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
