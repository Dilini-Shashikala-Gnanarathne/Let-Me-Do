import React from "react";

import DashboardIcon from "../assets/home.png";
import ReportsIcon from "../assets/result.png";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  {
    title: "Result",
    path: "/Result",
    icon: <img src={ReportsIcon} alt="Result" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  
];
