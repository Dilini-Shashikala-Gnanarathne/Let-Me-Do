import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './AllResult.css';

// First Year First Semester GPA
const FirstYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>First Year First Semester GPA: {user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

// First Year Second Semester GPA
const FirstYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>First Year Second Semester GPA      : {user.firstyearsecondGPA}</p>
      </div>
    </div>
  );
};

// Second Year First Semester GPA
const SecondYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>Second Year First Semester GPA: {user.secondyearfirstGPA}</p>
      </div>
    </div>
  );
};

// Second Year Second Semester GPA
const SecondYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>Second Year Second Semester GPA: {user.secondyearsecondGPA}</p>
      </div>
    </div>
  );
};

// Third Year First Semester GPA
const ThirdYearFirstSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
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
    <div className="grade-button-div">
      
      <div className='semester-selection'>
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
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>Fourth Year First Semester GPA: {user.fourthyearfirstGPA}</p>
      </div>
    </div>
  );
};

// Fourth Year Second Semester GPA
const FourthYearSecondSemesterGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>Fourth Year Second Semester GPA: {user.fourthyearsecondGPA}</p>
      </div>
    </div>
  );
};
const FinalGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grade-button-div">
      
      <div className='semester-selection'>
        <p>Fourth Year Second Semester GPA: {user.fourthyearsecondGPA}</p>
      </div>
    </div>
  );
};

export {
  FirstYearFirstSemesterGPA,
  FirstYearSecondSemesterGPA,
  SecondYearFirstSemesterGPA,
  SecondYearSecondSemesterGPA,
  ThirdYearFirstSemesterGPA,
  ThirdYearSecondSemesterGPA,
  FourthYearFirstSemesterGPA,
  FourthYearSecondSemesterGPA,
  FinalGPA,
};
