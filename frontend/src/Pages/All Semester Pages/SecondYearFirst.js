import React from 'react'

const SecondYearFirst = () => {
    return (
        <>
    <Background/>
      <div >
        {!formVisible ? (
          <div className="container">
            <h3 className="title">Calculate Semester GPA</h3>
            <div className="form-group">
              <label htmlFor="numCourses">Number of Courses</label>
              <input
                type="number"
                id="numCourses"
                name="numCourses"
                value={numCourses}
                onChange={(e) => setNumCourses(e.target.value)}
                required
              />
            </div>
            <button className='login-button'onClick={handleStart}>Enter</button>
          </div>
        ) : (
          <div>
            
            {submissionCount < numCourses ? (
            <div className="container-Add">
            <form>
              <h3 className="title">Add Course Details</h3>
              <div className="form-group">
                <label htmlFor="id" className='label-title'>Course Code: IS100{submissionCount + 1}</label>
              </div>
              <div className="form-group">
                <label htmlFor="name">Enter Subject Grade</label>
                <select
                  id="name"
                  name="name"
                  required
                  className="form-control"
                >
                  <option value="">Select Grade</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="C-">C-</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="D-">D-</option>
                  <option value="E">E</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="credit">Enter Number of Credits</label>
                <select
                  id="credit"
                  name="credit"
                  required
                  className="form-control"
                >
                  <option value="">Select Credits</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-group">
                <button type="button" onClick={handleAddClick}>
                  Add
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="container-end">
                <h3 className="title"> 
                  <div className="form-end">
                    <p className='check-text'>You successfully added {submissionCount} courses </p>
                    <p className='checkmark'>✨</p>         
                  </div>
                </h3>
            </div>
            )}
          </div>
        )}
      </div>
        
        </>
      );
    };
    

export default SecondYearFirst
