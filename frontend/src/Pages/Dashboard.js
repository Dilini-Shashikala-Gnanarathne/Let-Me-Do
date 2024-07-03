import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming you have the CSS file mentioned above
import Background from '../components/D-Background';
const Dashboard = ({ data, updateUser }) => {
  const [courseData, setCourseData] = useState({
    id: '',
    name: '',
    credit: '',
  });
  const [numCourses, setNumCourses] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setCourseData({
        id: data.id,
        name: data.name,
        credit: data.credit,
      });
      setIsEditing(true);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser(courseData);
    } else {
      addUser(courseData);
    }
  };

  const addUser = (data) => {
    Axios.post('http://localhost:3001/api/create', data)
      .then(() => {
        setSubmissionCount((prevCount) => prevCount + 1);
        resetForm();
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  const resetForm = () => {
    setCourseData({
      id: '',
      name: '',
      credit: '',
    });
  };

  const handleStart = () => {
    setFormVisible(true);
  };

  return (
    <>
    <Background/>
    <div className="container">
      {!formVisible ? (
        <div>
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
          <button onClick={handleStart}>Enter</button>
        </div>
      ) : (
        <div>
         
          {submissionCount < numCourses ? (
            
            <form onSubmit={handleSubmit}>
               <h3 className="title"> <div className="form-group">
                <p>Enter subject: {submissionCount+1}</p>
              </div></h3>
              <div className="form-group">
                <label htmlFor="id">Enter Course Code</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={courseData.id}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Enter Subject Grade</label>
                <select
                  id="name"
                  name="name"
                  value={courseData.name}
                  onChange={handleInputChange}
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
                  value={courseData.credit}
                  onChange={handleInputChange}
                  required
                  className="form-group"
                >
                  <option value="">Select Credits</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <button type="submit">Add</button>
              </div>
            </form>
          ) : (
            <div>
              <h3 className="title"> 
                <div className="form-end">
                  You successfully added {submissionCount} courses 
                  <p className='checkmark'>✨</p>         
                </div>
              </h3>
            </div>
          )}
        </div>
      )}
    </div></>
  );
};

export default Dashboard;
