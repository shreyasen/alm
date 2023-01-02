import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import "../styles/Header.scss";
import user from "../assets/images/user-solid.svg";
import menu from "../assets/images/bars-solid.svg";
import logoutIcon from "../assets/images/right-from-bracket-solid.svg";
import { ROUTE_NAMES } from "../router/RouteNames";
import { logout } from "../actions/AuthActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [navigate]);

  const handleAccountSettings = () => {
    navigate(ROUTE_NAMES.accountsettings);
  };
  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTE_NAMES.signin);
  };
  return (
    <>
      <header className="main-header">
        <div className="header-logo">
          <Link to={ROUTE_NAMES.root} className="header-link">
            ALM
          </Link>
        </div>
        <div className="header-menu">
        
        {Cookies.get("JWT-TOKEN") ? (
          <i className="fa-solid fa-bars bars-icon" onClick={handleMenu}></i>
        ) : (
          <>
          <div className="header-menu-item">About Us</div>
        <div className="header-menu-item">Help</div>
        </>
        )}
      </div>
      </header>

      {showMenu && (
        <div className="header-dropdown-menu">
          <div onClick={handleAccountSettings} className="header-dropdown-menu-item">
            <i className="fa-solid fa-user"></i>
            <span className="menu-text">Account Settings</span>
          </div>
          <div onClick={handleLogout} className="header-dropdown-menu-item">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="menu-text">Logout</span>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
