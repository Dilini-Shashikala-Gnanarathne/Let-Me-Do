import React from 'react';
import { useAuth, useEmail } from '../../context/AuthContext';
import './AllResult.css';
const UserProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderSemesters = (semesterData) => {
    return semesterData.map((semester, index) => (
      <div className='container-all-sem-result' key={index}>
        <h3 className='semester'>Semester {index + 1}</h3>
        <div className='form-group-result'>
          {semester.map((subject, subIndex) => (
            <div key={subject._id || subIndex}>
              {subject.grade === "Skip" ? (
                <></>
              ) : (
                <>
                  <p className='semester-p'>Subject: {subject.subject}</p>
                  <p>Grade: {subject.grade}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    ));
  };
  

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
        <h2>Your Results:</h2>
        {renderSemesters([
          user.firstyearfirst,
          user.firstyearsecond,
          user.secondyearfirst,
          user.secondyearsecond,
          user.thirdyearfirst,
          user.thirdyearsecond,
          user.fourthyearfirst,
          user.fourthyearsecond,
        ])}
      </div>
    </div>
  );
};

export default UserProfile;
