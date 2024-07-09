import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Result from "./Pages/Result";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Reports from "./Pages/Report";
import Allsemester from "./Pages/Allsemester";
import FirstYearFirst from "./Pages/All Semester Pages/FirstYearFrirst";
import FirstYearSecond from "./Pages/All Semester Pages/FirstYearSecond";
import SeconYearFirst from "./Pages/All Semester Pages/SecondYearFirst";
import SeconYearSecond from "./Pages/All Semester Pages/SecondYearSecond";
import ThirdYearFirst from "./Pages/All Semester Pages/ThirdYearFirst";
import ThirdYearSecond from "./Pages/All Semester Pages/ThirdYearSecond";
import FourthYearFirst from "./Pages/All Semester Pages/FourthYearFirst";
import FourthYearSecond from "./Pages/All Semester Pages/FirstYearSecond";
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/firstfirst",
    element: <FirstYearFirst />,
  },
  {
    path: "/firstsecond",
    element: <FirstYearSecond />,
  },{
    path: "/secondfirst",
    element: <SeconYearFirst />,
  },{
    path: "/secondsecond",
    element: <SeconYearSecond />,
  },
  {
    path: "/thirdfirst",
    element: <ThirdYearFirst />,
  },
  {
    path: "/thirdsecond",
    element: <ThirdYearSecond />,
  },{
    path: "/fourthfirst",
    element: <FourthYearFirst />,
  },{
    path: "/fourthsecond",
    element: <FourthYearSecond />,
  },
  {
    path: "/login",
    element: <Login />,
  },
 
  {
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Allsemester />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "report",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
