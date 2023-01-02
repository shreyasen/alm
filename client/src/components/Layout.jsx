import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-layout">
        {children}
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default Layout;
