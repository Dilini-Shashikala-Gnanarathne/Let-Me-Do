import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [selectedGPA, setSelectedGPA] = useState(null);
  const navigate = useNavigate();
  const { user, isLoading } = useAuth(); 

  const endpoints = [
    { name: 'First Year First Semester GPA', url: 'getfirstyearfirstGPA', key: 'firstyearfirstGPA' },
    { name: 'First Year Second Semester GPA', url: 'getfirstyearsecondGPA', key: 'firstyearsecondGPA' },
    { name: 'Second Year First Semester GPA', url: 'getsecondyearfirstGPA', key: 'secondyearfirstGPA' },
    { name: 'Second Year Second Semester GPA', url: 'getsecondyearsecondGPA', key: 'secondyearsecondGPA' },
    { name: 'Third Year First Semester GPA', url: 'getthirdyearfirstGPA', key: 'thirdyearfirstGPA' },
    { name: 'Third Year Second Semester GPA', url: 'getthirdyearsecondGPA', key: 'thirdyearsecondGPA' },
    { name: 'Fourth Year First Semester GPA', url: 'getfourthyearfirstGPA', key: 'fourthyearfirstGPA' },
    { name: 'Fourth Year Second Semester GPA', url: 'getfourthyearsecondGPA', key: 'fourthyearsecondGPA' }
  ];

  useEffect(() => {
   
  }, []); 

  const handleSubmit = (url, key) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log("Successfully fetched GPA data for", url);
        setSelectedGPA(key); 
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Background />
      <div className="container-Add-div">
        <h1 className='title-all-result'>Welcome, {user ? user.name : 'Guest'}</h1>
        {user && <p>Register Number: {user.id}</p>}
        <div>
          <h2>Your Semester GPA</h2>
          <div className="semester-selection-">
            {endpoints.map((endpoint, index) => (
              <div key={index}>
                <form onSubmit={handleSubmit(endpoint.url, endpoint.key)}>
                  <button type="submit" className="semester-selection">{endpoint.name}</button>
                </form>
                {selectedGPA === endpoint.key && <p user={user} semesterGPA={`${endpoint.name}: ${user[endpoint.key]}`} />}
                <p>{selectedGPA}</p>
              </div>
            ))}
          </div>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;


