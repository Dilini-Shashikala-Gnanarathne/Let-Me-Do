import React from 'react';
import { Link } from 'react-router-dom'; 
import './Allsemester.css';

const SemesterGPAForm = ({ semesterName, pageName }) => {
  const getLinkPath = () => {
    switch (pageName) {
      case '1':
        return '/addresult1';
      case '2':
        return '/addresult2';
      case '3':
        return '/addresult3';
      case '4':
        return '/addresult4';
      case '5':
        return '/addresult5';
      case '6':
        return '/addresult6';
      case '7':
        return '/addresult7';
      case '8':
        return '/addresult8';
      default:
        return '/';
    }
  };

  return (
    <div className="container-all-sem">
      <p className="title-all">Calculate {semesterName} Semester GPA</p>
      <form className="form-group">
        <label htmlFor="numCourses">Add Your Results</label>
        <Link to={getLinkPath()}>
          <button type="button" className='add-result'>Add</button>
        </Link>
      </form>
    </div>
  );
};

const Allsemester = () => {
  return (
    <>
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
