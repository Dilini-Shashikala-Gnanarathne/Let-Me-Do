import React from 'react';
import './Allsemester.css';

const Allsemester = () => {
  return (
    <>
    <h3 className='first'>First Year</h3>
    <div className="container-all-sem-wrapper">
      <div className="container-all-sem">
        <p className="title-all">Calculate 1st Semester GPA</p>
        <div className="form-group">
          <label htmlFor="numCourses">Number of Courses</label>
          <input
            type="number"
            id="numCourses"
            name="numCourses"
            required
          />
        </div>
      </div>
      <div className="container-all-sem">
        <p className="title-all">Calculate 2nd Semester GPA</p>
        <div className="form-group">
          <label htmlFor="numCourses">Number of Courses</label>
          <input
            type="number"
            id="numCourses"
            name="numCourses"
            required
          />
        </div>
      </div>
    </div>


    
    </>
  );
};

export default Allsemester;
