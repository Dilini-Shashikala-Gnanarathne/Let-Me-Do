import React from 'react';
import { useAuth, useEmail } from '../../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const email = useEmail();

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderSemesters = (semesterData) => {
    return semesterData.map((semester, index) => (
      <div key={index}>
        <h3>Semester {index + 1}</h3>
        {semester.map((subject, subIndex) => (
          <div key={subject._id || subIndex}>
            <p>Subject: {subject.subject}</p>
            <p>Grade: {subject.grade}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container-Add">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {email}</p>
      <div>
        <h2>Semesters:</h2>
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
        <p>Total GPA: {user.totalgpa}</p>
      </div>
    </div>
  );
};

export default UserProfile;
