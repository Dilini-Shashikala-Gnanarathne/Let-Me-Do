import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import { FinalGPA } from '../All Result Pages/FirstYearFirstGPA';

const GPAComponents = {
  'finalGPA': FinalGPA,
};

const endpoints = [
  { name: 'Final GPA', url: 'finalGPA', key: 'finalGPA' },
  // Add more endpoints as needed
];

const SemesterGPA = ({ semesterGPA, semester }) => (
  <div className="grade-button-div">
    <div className='semester-selection'>
      <p>{semester}: {semesterGPA}</p>
    </div>
  </div>
);

const FirstYearFirst = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [selectedGPA, setSelectedGPA] = useState(null);

  const handleSubmitGpa = (url, key) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }
    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log('Successfully fetched GPA data for', url);
        setSelectedGPA(key);
        setError(null);
        // Optionally, navigate to another page after successful fetch
        navigate(`/some-route/${key}`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const GPAComponent = selectedGPA ? GPAComponents[selectedGPA] : null;

  return (
    <>
      <Background />
      <div className="container-Add-div">
        <div className="form-group">
          <h1 className='title-all-result'>Welcome, {user.name}</h1>
          <p>Register Number: {user.id}</p>
          <h2>Your Semester GPA Results</h2>
          {error && <p>{error}</p>}
          <div>
            <h3>Your Current GPA:</h3>
            {/* Display current GPA here */}
          </div>
          <SemesterGPA semesterGPA={user.firstyearfirstGPA} semester="First Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.firstyearsecondGPA} semester="First Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.secondyearfirstGPA} semester="Second Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.secondyearsecondGPA} semester="Second Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.thirdyearfirstGPA} semester="Third Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.thirdyearsecondGPA} semester="Third Year Second Semester GPA" />
          <SemesterGPA semesterGPA={user.fourthyearfirstGPA} semester="Fourth Year First Semester GPA" />
          <SemesterGPA semesterGPA={user.fourthyearsecondGPA} semester="Fourth Year Second Semester GPA" />
        </div>
        <div className="container-Add">
          {endpoints.map((endpoint, index) => (
            <form key={index} onSubmit={handleSubmitGpa(endpoint.url, endpoint.key)}>
              <div className="form-group">
                <button type="submit">{endpoint.name}</button>
              </div>
            </form>
          ))}
          {error && <p>{error}</p>}
          {GPAComponent && <GPAComponent />}
          <p>Dilini</p>
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
