import Sidebar from "./sidebar/Sidebar";
import "./layout.css";
import Header from "./header/Header";
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar-container">
        <Sidebar />
        <Header />
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
