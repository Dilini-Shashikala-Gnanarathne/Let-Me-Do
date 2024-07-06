import React from 'react';
import './Allsemester.css';
import { Link } from 'react-router-dom'; 

const pageLinks =({})=>{
  return (
    <div className="page-links">
      <Link to="/">Dashboard</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/allsemester">All Semester</Link>
    </div>
  )
}


const SemesterGPAForm = ({ semesterName, pageName }) => {
  return (
    <div className="container-all-sem">
      <p className="title-all">Calculate {semesterName} Semester GPA</p>
      <form className="form-group">
        <label htmlFor="numCourses">Add Your Results</label>
        {
          pageName='1'?(<Link to="/addresult">
            <button type="submit" className='add-result'>Add</button>
          </Link> ):(<h1 style={{ color: 'red' }}>Hey</h1>)
        } 
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
        <SemesterGPAForm semesterName="2nd"  pageName="2"/>
      </div>

      <h3 className='first'>Second Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st"  pageName="3"/>
        <SemesterGPAForm semesterName="2nd"  pageName="4"/>
      </div>

      <h3 className='first'>Third Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st"  pageName="5"/>
        <SemesterGPAForm semesterName="2nd"  pageName="6"/>
      </div>

      <h3 className='first'>Fourth Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st"  pageName="7"/>
        <SemesterGPAForm semesterName="2nd"  pageName="8"/>
      </div>
    </>
  );
};

export default Allsemester;
