import React from 'react';
import { Link } from 'react-router-dom'; 
import './Allsemester.css';
import { useAuth } from '../context/AuthContext';
const SemesterGPAForm = ({ semesterName, pageName }) => {
  const getLinkPath = () => {
    switch (pageName) {
      case '1':
        return '/firstfirst';
      case '2':
        return '/firstsecond';
      case '3':
        return '/secondfirst';
      case '4':
        return '/secondsecond';
      case '5':
        return '/thirdfirst';
      case '6':
        return '/thirdsecond';
      case '7':
        return '/fourthfirst';
      case '8':
        return '/fourthsecond';
      default:
        return '/';
    }
  };

  return (
    <>
    <div className="container-all-sem">
      <p className="title-all">Calculate {semesterName} Semester GPA</p>
      <form className="form-group">
        <label htmlFor="numCourses">Add Your Results</label>
        <Link to={getLinkPath()}>
          <button type="button" className='add-result'>Add</button>
        </Link>
      </form>
    </div>
    </>
  );
};

const Allsemester = () => {
  const { user, loading } = useAuth();

  return (
    <>
    <div className='container-Add-home'>
    <h1 className='title-all-result'>Welcome, {user.name}</h1>
    <p>Register Number: {user.id}</p>
    <p>Department of Computing and Information System</p>
    <p>Faculty of Computing</p>
    <p>Sabaragamuwa University of Sri Lanka </p>
    </div>
      <h3 className='first'>First Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" pageName="1" />
        <SemesterGPAForm semesterName="2nd" pageName="2" />
      </div>

      <h3 className='first'>Second Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" pageName="3" />
        <SemesterGPAForm semesterName="2nd" pageName="4" />
      </div>

      <h3 className='first'>Third Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" pageName="5" />
        <SemesterGPAForm semesterName="2nd" pageName="6" />
      </div>

      <h3 className='first'>Fourth Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" pageName="7" />
        <SemesterGPAForm semesterName="2nd" pageName="8" />
      </div>
    </>
  );
};
export default Allsemester;