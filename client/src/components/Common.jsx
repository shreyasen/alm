import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Common = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("JWT-TOKEN")) {
      // navigate("/signin");
    }
  }, [navigate]);
  return null;
};
export default Common;
