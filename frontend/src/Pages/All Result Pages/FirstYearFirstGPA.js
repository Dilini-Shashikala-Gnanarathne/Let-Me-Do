import React from 'react';
import { useAuth, useEmail } from '../../context/AuthContext';
import './AllResult.css';
const FirstYearFirstGPA = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

FirstYearFirstSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};
 
FirstYearSecondSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

SecondYearFirstSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

SecondYearSecondSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

ThirdYearFirstSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

ThirdYearSecondSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

FourthYearFirstSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};

FourthYearSecondSemesterGPA= () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  };

  return (
    <div className="container-Add-result">
      <h1 className='title-all-result'>Welcome, {user.name}</h1>
      <p>Register Number: {user.id}</p>
      <div>
       <p>FirstYearFirstGPA:{user.firstyearfirstGPA}</p>
      </div>
    </div>
  );
};


export default FirstYearFirstGPA;
