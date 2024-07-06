import React from 'react'

const SubjectGrade = () => {
  return (
    <div>
      <div className="form-group">
                <label htmlFor="name">Enter Subject Grade</label>
                <select
                  id="name"
                  name="name"
                //   value={courseData.name}
                //   onChange={handleInputChange}
                  required
                  className="form-group"
                >
                  <option value="">Select Grade</option>
                  <option>A+</option>
                  <option>A</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B</option>
                  <option>B-</option>
                  <option>C+</option>
                  <option>C</option>
                  <option>C-</option>
                  <option>D+</option>
                  <option>D</option>
                  <option>D-</option>
                  <option>E</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="credit">Enter Number of Credits</label>
                <select
                  id="credit"
                  name="credit"
                //   value={courseData.credit}
                //   onChange={handleInputChange}
                  required
                  className="form-group"
                >
                  <option value="">Select Credits</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
    </div>
  )
}

export default SubjectGrade
