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
  const handleAddClick = () => {
    if (submissionCount < 9) {
        setSubmissionCount(submissionCount + 1);
    }
  };
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
        <div className="container-Add">
         
          {submissionCount < numCourses ? (
         <div className="container-Add">
          <form>
            <h3 className="title">Add Course Details</h3>
            <div className="form-group">
              <label htmlFor="id">Course Code: IS100{submissionCount + 1}</label>
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
