import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import LogoutIcon from "../assets/Logout.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const isAddPath = SidebarData.some(
    (item) => item.title === "Add" && item.path === location.pathname
  );

  return (
    <div className="nav-menu active">
      <div className="nav-menu-header">
        <span className="app-name">
          Let<span style={{ textAlign: "center", verticalAlign: "middle", width: "20px", height: "20px", color: "#0066ff" }}>Me</span>Do
        </span>
      </div>
      <ul className="nav-menu-items">
        {SidebarData.filter(item => item.title !== "Add").map((item, index) => {
          const isActive = location.pathname === item.path || (item.title === "Home" && isAddPath);
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} className={`${isActive ? 'active' : ''} ${item.title.toLowerCase()}`}>
                {item.icon}
                <span className="item-title">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="footer-button" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Logout" className="nav-icon" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
