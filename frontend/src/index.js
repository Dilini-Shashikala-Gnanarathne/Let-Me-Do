import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Result from "./Pages/Result";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Reports from "./Pages/Report";
import Allsemester from "./Pages/Allsemester";
import Addresult from "./Pages/Addresult";
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addresult",
    element: <Addresult />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "allsemester",
        element: <Allsemester />,
      },
      {
        path: "/home",
        element: <Dashboard />,
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
