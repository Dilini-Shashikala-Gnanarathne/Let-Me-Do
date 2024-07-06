import React from 'react';
import './Allsemester.css';
import { Link } from 'react-router-dom'; 

const SemesterGPAForm = ({ semesterName }) => {
  return (
    <div className="container-all-sem">
      <p className="title-all">Calculate {semesterName} Semester GPA</p>
      <form className="form-group">
        <label htmlFor="numCourses">Add Your Results</label>
        { semesterName=='1st'? (
          <Link to="/addresult">
          <button type="submit" className='add-result'>Add</button>
          </Link> ):(<Link to="/login">
          <button type="submit" className='add-result'>Add</button>
          </Link>)    
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
        <SemesterGPAForm semesterName="1st" />
        <SemesterGPAForm semesterName="2nd" />
      </div>

      <h3 className='first'>Second Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" />
        <SemesterGPAForm semesterName="2nd" />
      </div>

      <h3 className='first'>Third Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" />
        <SemesterGPAForm semesterName="2nd" />
      </div>

      <h3 className='first'>Fourth Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" />
        <SemesterGPAForm semesterName="2nd" />
      </div>
    </>
  );
};

export default Allsemester;
