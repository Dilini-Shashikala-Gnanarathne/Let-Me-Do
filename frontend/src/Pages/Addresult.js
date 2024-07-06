import React, { useEffect, useState } from 'react';
import SubjectGrade from '../components/SubjectGrade';
import '../App.css';
import Background from '../components/D-Background';
const Dashboard = ({  }) => {



  return (
    <>
    <Background/>
    <div >
        <div className="container-Add">
          <form >
               <h3 className="title"> <div className="form-group">
              </div></h3>
              <div className="form-group">
                <label htmlFor="id">Enter Course Code</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  required
                />
              </div>
              <SubjectGrade />
              <div className="form-group">
                <button type="submit">Add</button>
              </div>
            </form>
    </div></div>
    </>
  );
};

export default Dashboard;
