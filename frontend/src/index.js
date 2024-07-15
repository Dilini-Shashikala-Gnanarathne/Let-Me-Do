import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Result from './Pages/Result';
import Login from './Pages/Login';
import Register from './Pages/Signup';
import Reports from './Pages/Report';
import Allsemester from './Pages/Allsemester';
import FirstYearFirst from './Pages/All Semester Pages/FirstYearFrirst'; 
import FirstYearSecond from './Pages/All Semester Pages/FirstYearSecond';
import SecondYearFirst from './Pages/All Semester Pages/SecondYearFirst'; 
import SecondYearSecond from './Pages/All Semester Pages/SecondYearSecond'; 
import ThirdYearFirst from './Pages/All Semester Pages/ThirdYearFirst';
import ThirdYearSecond from './Pages/All Semester Pages/ThirdYearSecond';
import FourthYearFirst from './Pages/All Semester Pages/FourthYearFirst';
import FourthYearSecond from './Pages/All Semester Pages/FourthYearSecond'; 
import GetFirstYearFirst from './Pages/All Result Pages/FirstYearFirstResult';
import { AuthProvider } from './context/AuthContext';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: 'home',
        element: <Allsemester />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'report',
        element: <Reports />,
      },
      {
        path: 'firstfirst',
        element: <FirstYearFirst />,
      },
      {
        path: 'firstsecond',
        element: <FirstYearSecond />,
      },
      {
        path: 'secondfirst',
        element: <SecondYearFirst />,
      },
      {
        path: 'secondsecond',
        element: <SecondYearSecond />,
      },
      {
        path: 'thirdfirst',
        element: <ThirdYearFirst />,
      },
      {
        path: 'thirdsecond',
        element: <ThirdYearSecond />,
      },
      {
        path: 'fourthfirst',
        element: <FourthYearFirst />,
      },
      {
        path: 'fourthsecond',
        element: <FourthYearSecond />,
      },
      {
        path: 'getfirstfirst',
        element: <GetFirstYearFirst />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
