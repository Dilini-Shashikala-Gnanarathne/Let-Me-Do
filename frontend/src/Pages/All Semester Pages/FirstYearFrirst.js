import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const FirstYearFirst = () => {
  const [courseData, setCourseData] = useState([]);
  const [numCourses, setNumCourses] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (submissionCount < numCourses) {
      setCourseData((prevData) => [
        ...prevData,
        { semesterSubject: `IS100${submissionCount + 1}`, subjectname: '', grade: '', gpa: '' },
      ]);
    }
  }, [submissionCount, numCourses]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...courseData];
    updatedData[index][name] = value;
    setCourseData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionCount < numCourses) {
       addUser(courseData[submissionCount]);
    }
  };

  const addUser = async (data) => {
    if (!user) {
      setError('User not logged in');
      return;
    }
    
    try {
      const token = await user.getIdToken(); 
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      console.log(token);
      await Axios.post('http://localhost:3001/api/firstyearfirst', { updates: [data] }, config);
      setSubmissionCount((prevCount) => prevCount + 1);
      resetForm();
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message || 'Validation error');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const resetForm = () => {
    setCourseData((prevData) => [
      ...prevData.slice(0, -1),
      { semesterSubject: `IS100${submissionCount + 2}`, subjectname: '', grade: '', gpa: '' },
    ]);
  };

  const handleStart = () => {
    setFormVisible(true);
  };

  return (
    <>
      <Background />
      <div>
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
            <button className="login-button" onClick={handleStart}>
              Enter
            </button>
          </div>
        ) : (
          <div>
            {submissionCount < numCourses ? (
              <div className="container-Add">
                <form onSubmit={handleSubmit}>
                  <h3 className="title">Add Course Details</h3>
                  <div className="form-group">
                    <label className="label-title">
                      Course Code: IS100{submissionCount + 1}
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subjectname">Enter Subject Name</label>
                    <input
                      type="text"
                      id="subjectname"
                      name="subjectname"
                      required
                      className="form-control"
                      value={courseData[submissionCount]?.subjectname || ''}
                      onChange={(e) => handleInputChange(e, submissionCount)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="grade">Enter Subject Grade</label>
                    <select
                      id="grade"
                      name="grade"
                      required
                      className="form-control"
                      value={courseData[submissionCount]?.grade || ''}
                      onChange={(e) => handleInputChange(e, submissionCount)}
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
                    <label htmlFor="gpa">Enter GPA</label>
                    <input
                      type="number"
                      step="0.1"
                      id="gpa"
                      name="gpa"
                      required
                      className="form-control"
                      value={courseData[submissionCount]?.gpa || ''}
                      onChange={(e) => handleInputChange(e, submissionCount)}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit">Add</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="container-end">
                <h3 className="title">
                  <div className="form-end">
                    <p className="check-text">
                      You successfully added {submissionCount} courses
                    </p>
                    <p className="checkmark">✨</p>
                  </div>
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default FirstYearFirst;
