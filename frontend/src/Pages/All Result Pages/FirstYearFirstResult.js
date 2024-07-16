import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import FirstYearFirstGPA from '../All Result Pages/FirstYearFirstGPA';    

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [showGPA, setShowGPA] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const endpoints = [
    { name: 'First Year First Semester GPA', url: 'getfirstyearfirstGPA' },
    { name: 'First Year Second Semester GPA', url: 'getfirstyearsecondGPA' },
    { name: 'Second Year First Semester GPA', url: 'getsecondyearfirstGPA' },
    { name: 'Second Year Second Semester GPA', url: 'getsecondyearsecondGPA' },
    { name: 'Third Year First Semester GPA', url: 'getthirdyearfirstGPA' },
    { name: 'Third Year Second Semester GPA', url: 'getthirdyearsecondGPA' },
    { name: 'Fourth Year First Semester GPA', url: 'getfourthyearfirstGPA' },
    { name: 'Fourth Year Second Semester GPA', url: 'getfourthyearsecondGPA' }
  ];

  const handleSubmit = (url) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log("Great job!");
        setShowGPA(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          {endpoints.map((endpoint, index) => (
            <form key={index} onSubmit={handleSubmit(endpoint.url)}>
              <div className="form-group">
                <button type="submit">{endpoint.name}</button>
              </div>
            </form>
          ))}
          {error && <p>{error}</p>}
          {showGPA && <FirstYearFirstGPA />}
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
