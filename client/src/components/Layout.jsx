import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-layout">
      {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
