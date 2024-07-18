import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const FirstYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>First Year First Semester GPA: {user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

const FirstYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>First Year Second Semester GPA: {user.firstyearsecondGPA}</p>
      </div>
    </div>
  );
};

const SecondYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>Second Year First Semester GPA: {user.secondyearfirstGPA}</p>
      </div>
    </div>
  );
};
const SecondYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>Second Year Second Semester GPA: {user.secondyearsecondGPA}</p>
      </div>
    </div>
  );
};
const ThirdYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>Third Year First Semester GPA: {user.thirdyearfirstGPA}</p>
      </div>
    </div>
  );
};

// Third Year Second Semester GPA
const ThirdYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>Third Year Second Semester GPA: {user.thirdyearsecondGPA}</p>
      </div>
    </div>
  );
};

// Fourth Year First Semester GPA
const FourthYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <p>Fourth Year First Semester GPA: {user.fourthyearfirstGPA}</p>
      </div>
    </div>
  );
};

const FourthYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add-result">
      <div>
        <p>Fourth Year Second Semester GPA: {user.fourthyearsecondGPA}</p>
      </div>
    </div>
  );
};

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [selectedGPA, setSelectedGPA] = useState(null);
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
        console.log("Successfully fetched GPA data for", url);
        setSelectedGPA(url); // Set the selected GPA to show the correct component
        setError(null); // Reset any previous errors
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
      <div className="container-Add-div">
        <div className="form-group">
          <label htmlFor="grade-div">Select Semester</label>
        {error && <p>{error}</p>}
        {<FirstYearFirstSemesterGPA />}
        {<FirstYearSecondSemesterGPA />}
        {<SecondYearFirstSemesterGPA />}
        {<SecondYearSecondSemesterGPA />} 
        {<ThirdYearFirstSemesterGPA />}
        {<ThirdYearSecondSemesterGPA />}
        {<FourthYearFirstSemesterGPA />}
        {<FourthYearSecondSemesterGPA />}
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
