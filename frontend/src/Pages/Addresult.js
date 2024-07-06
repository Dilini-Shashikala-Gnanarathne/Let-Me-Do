import React from 'react';

const Addresult = ({ pageName }) => {
  return (
    <>
        <div>
          <div className="form-group">
            <label htmlFor="id">Enter Course Code</label>
            <input
              type="text"
              id="id"
              name="id"
              required
            />
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
        </div>
    </>
  );
}

export default Addresult;
