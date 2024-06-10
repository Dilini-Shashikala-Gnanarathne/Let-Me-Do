import React from "react";

import DashboardIcon from "../assets/icons/Group 1.png";
import ReportsIcon from "../assets/icons/reports.png";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon"/>,
    cName: "nav-text dashboard",
  },
 
  {
    title: "Reports",
    path: "/reports",
    icon: <img src={ReportsIcon} alt="Reports" className="reports-icon"/>,
    cName: "nav-text reports",
  },
  {
    title: "Result",
    path: "/Result",
    icon: <img src={ReportsIcon} alt="Reports" className="reports-icon"/>,
    cName: "nav-text reports",
  },
  
  
  
 
];
