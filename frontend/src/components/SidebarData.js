import React from "react";

import DashboardIcon from "../assets/home.png";
import ResultIcon from "../assets/result.png";
import ReportsIcon from "../assets/report.png";
export const SidebarData = [
  {
    title: "Allsemester",
    path: "/allsemester",
    icon: <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  {
    title: "Home",
    path: "/home",
    icon: <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  {
    title: "Result",
    path: "/Result",
    icon: <img src={ResultIcon} alt="Result" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  {
    title: "Report",
    path: "/Report",
    icon: <img src={ReportsIcon} alt="Dashboard" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
  
];
