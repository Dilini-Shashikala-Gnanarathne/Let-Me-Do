import React, { useState } from 'react';
import './Allsemester.css';
import AddResult2 from './AddResult2';

const SemesterGPAForm = ({ semesterName, handleAddResult }) => {
  return (
    <div className="container-all-sem">
      <>
        <p className="title-all">Calculate {semesterName} Semester GPA</p>
        <form className="form-group">
          <label htmlFor="numCourses">Add Your Results</label>
          <button type="button" className='add-result' onClick={handleAddResult}>Add</button>
        </form>
      </>
    </div>
  );
};

const Allsemester = () => {
  const [showAddResult, setShowAddResult] = useState(false);

  const handleAddResult = () => {
    setShowAddResult(true);
    console.log('Add Result clicked');
  };

  if (showAddResult) {
    return <AddResult2 />;
  }

  return (
    <>
      <h3 className='first'>First Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" handleAddResult={handleAddResult} />
        <SemesterGPAForm semesterName="2nd" handleAddResult={handleAddResult} />
      </div>

      <h3 className='first'>Second Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" handleAddResult={handleAddResult} />
        <SemesterGPAForm semesterName="2nd" handleAddResult={handleAddResult} />
      </div>

      <h3 className='first'>Third Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" handleAddResult={handleAddResult} />
        <SemesterGPAForm semesterName="2nd" handleAddResult={handleAddResult} />
      </div>

      <h3 className='first'>Fourth Year</h3>
      <div className="container-all-sem-wrapper">
        <SemesterGPAForm semesterName="1st" handleAddResult={handleAddResult} />
        <SemesterGPAForm semesterName="2nd" handleAddResult={handleAddResult} />
      </div>
    </>
  );
};

export default Allsemester;
