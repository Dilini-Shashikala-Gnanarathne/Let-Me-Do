import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { useAuth } from '../../context/AuthContext';

const SemesterGPA = ({ semesterGPA, semester }) => (
  <div className="grade-button-div">
    <div className='semester-selection'>
      <p>{semester}: {semesterGPA}</p>
    </div>
  </div>
);

const FinalGPA = () => {
  const { user } = useAuth();

  return (
    <div className="grade-button-div">
      <div className='semester-selection_final'>
        <p>Current GPA: {user.finalGPA}</p>
      </div>
    </div>
  );
};

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [selectedGPA, setSelectedGPA] = useState(null);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const endpoints = [
    { name: 'Current GPA', url: 'finalGPA' }
  ];

  const handleSubmit = (url) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log("Successfully fetched GPA data for", url);
        setSelectedGPA(url); 
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User is not authenticated</div>;
  }

  return (
    <>
      <div className="container-Add-div">
        <div className="form-group">
          <h1 className='title-all-result'>Welcome, {user.name}</h1>
          <h2>Your GPA Results:</h2>          
          {error && <p>{error}</p>}
          <SemesterGPA semesterGPA={user.firstyearfirstGPA} semester="First Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.firstyearsecondGPA} semester="First Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.secondyearfirstGPA} semester="Second Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.secondyearsecondGPA} semester="Second Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.thirdyearfirstGPA} semester="Third Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.thirdyearsecondGPA} semester="Third Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.fourthyearfirstGPA} semester="Fourth Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.fourthyearsecondGPA} semester="Fourth Year Second Semester GPA" />
        </div>
        <div className="form-group">
  <div className="grade-selection-container">
    {selectedGPA && <FinalGPA />}
    <div className="grade-selection-buttons">
      {endpoints.map((endpoint, index) => (
        <form key={index} onSubmit={handleSubmit(endpoint.url)}>
          <button type="submit" className="container-Add-gpa-result">{endpoint.name}</button>
        </form>
      ))}
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default FirstYearFirst;
