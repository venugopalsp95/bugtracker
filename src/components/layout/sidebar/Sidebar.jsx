import { useContext, useState } from "react";
import "./sidebar.css";
import menuIcon from "../../../assets/icons/menu.png";
import dashboardIcon from "../../../assets/icons/dashboard.png";
import listIcon from "../../../assets/icons/list.png";
import usersIcon from "../../../assets/icons/users.png";
import reportsIcon from "../../../assets/icons/reports.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeSideBar = () => setIsOpen(false);
  if (!user) return null;

  return (
    <div>
      <img
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        src={menuIcon}
        alt=""
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {user && (
          <nav>
            <ul>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li onClick={closeSideBar}>
                  <img src={dashboardIcon} alt="" /> Dashboard
                </li>
              </NavLink>
              <NavLink to={"/buglist"}>
                <li onClick={closeSideBar}>
                  <img src={listIcon} alt="" /> Bug List
                </li>
              </NavLink>
              <NavLink to={"/users"}>
                <li onClick={closeSideBar}>
                  <img src={usersIcon} alt="" />
                  Users
                </li>
              </NavLink>
              <NavLink to={"reports"}>
                <li onClick={closeSideBar}>
                  <img src={reportsIcon} alt="" />
                  Reports
                </li>
              </NavLink>
            </ul>
          </nav>
        )}
        <div className="profile">
          <span className="profile-name">
            {user.name} <span className="profile-role">({user.role})</span>
          </span>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
