import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="nav-menu active">
      <div className="nav-menu-header">
        <span className="app-name">Let Me Do</span>
      </div>
      <ul className="nav-menu-items">
        {SidebarData.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} className={`${isActive ? 'active' : ''} ${item.title.toLowerCase()}`}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="footer-button">
        <span>Created by Dilini Shashikala</span>
      </button>
    </div>
  );
};

export default Navbar;
