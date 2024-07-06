import React, { useState } from 'react';
import SubjectGrade from '../components/SubjectGrade';
import '../App.css';
import Background from '../components/D-Background';

const Dashboard = () => {
  const [count, setCount] = useState(1);

  const handleAddClick = () => {
    if (count < 9) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <Background />
      {count < 9 ? (
        <div className="container-Add">
          <form>
            <h3 className="title">Add Course Details</h3>
            <div className="form-group">
              <label htmlFor="id">Course Code: IS100{count + 1}</label>
            </div>
            <SubjectGrade />
            <div className="form-group">
              <button type="button" onClick={handleAddClick}>
                Add
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="message">You have added the maximum number of courses.</div>
      )}
    </>
  );
};

export default Dashboard;
