import React, { useState } from 'react';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const SemesterGPA = ({ semesterGPA, semester }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      <div className='semester-selection'>
        <p>{semester}: {semesterGPA}</p>
      </div>
    </div>
  );
};

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Background />
      <div className="container-Add-div">
        <div className="form-group">
          <h1 className='title-all-result'>Welcome, {user.name}</h1>
          <p>Register Number: {user.id}</p>
          <h2>Your Semester GPA Results:</h2>
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
      </div>
    </>
  );
};

export default FirstYearFirst;
