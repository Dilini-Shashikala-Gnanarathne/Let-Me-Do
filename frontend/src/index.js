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
import Home from "./Pages/Home";
import Addresult2 from "./Pages/AddResult2";

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
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "addresult2",
        element: <Addresult2 />,
      },
      
      {
        path: "dashbord",
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
