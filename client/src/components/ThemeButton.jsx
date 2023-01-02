import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.mode.darkMode;

  const switchMode = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  return (
    <div onClick={switchMode} className="theme-switch-button">
      <i className={`fa fa-${darkMode ? "sun" : "moon"}-o`}></i>
    </div>
  );
};
export default ThemeButton;
