import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Reports from "./Routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./Routes/Dashboard";
import Result from "./Routes/Result";
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
     
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
