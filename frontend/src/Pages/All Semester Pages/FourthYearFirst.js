import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const courses = [
  { code: 'IS7101', name: 'Research Methodologies', credit: 2 },
  { code: 'IS7102', name: 'IT Law', credit: 1 },
  { code: 'IS7103', name: 'Business Process Simulation', credit: 2 },
  { code: 'IS7104', name: 'Enterprise Modelling Ontologies', credit: 2 },
  { code: 'IS7105', name: 'Organizational Behavior & Management', credit: 1 },
  { code: 'IS7106', name: 'Cloud Computing', credit: 2 },
  { code: 'IS7107', name: 'Mobile Application Development', credit: 1 },
  { code: 'IS7108', name: 'Web Service Technologies', credit: 2 },
  { code: 'IS7109', name: 'Geographical Information Systems', credit: 2 },
  { code: 'IS7110', name: 'Statistical Distribution & Inferences', credit: 1 },
  { code: 'IS7111', name: 'Advanced Programming Practicum', credit: 1 },
  { code: 'IS7112', name: 'Machine Learning', credit: 2 }
];


const FirstYearFirst = () => {
  const [courseData, setCourseData] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (submissionCount < courses.length) {
      setCourseData((prevData) => [
        ...prevData,
        { 
          subjectcode: courses[submissionCount].code, 
          subjectname: courses[submissionCount].name, 
          subjectcredit: courses[submissionCount].credit, 
          grade: '' 
        },
      ]);
    }
  }, [submissionCount]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...courseData];
    updatedData[index][name] = value;
    setCourseData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submissionCount < courses.length) {
      addUser(courseData[submissionCount]);
    }
  };

  const addUser = (data) => {
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.put('http://localhost:3001/api/fourthyearfirst', { email: user.email, updates: [data] })
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
    setCourseData((prevData) => [
      ...prevData.slice(0, -1),
      { 
        subjectname: courses[submissionCount + 1]?.name || '', 
        subjectcode: courses[submissionCount + 1]?.code || '', 
        subjectcredit: courses[submissionCount + 1]?.credit || '', 
        grade: '' 
      },
    ]);
  };

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          <form onSubmit={handleSubmit}>
            <h3 className="title">Add Course Details</h3>
            {submissionCount < courses.length && (
              <>
                <div className="form-group">
                  <label htmlFor="subjectname">Subject Name</label>
                  <input
                    type="text"
                    id="subjectname"
                    name="subjectname"
                    required
                    className="form-control"
                    value={courseData[submissionCount]?.subjectname || ''}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subjectname">Subject Code</label>
                  <input
                    type="text"
                    id="subjectcode"
                    name="subjectcode"
                    required
                    className="form-control"
                    value={courseData[submissionCount]?.subjectcode || ''}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subjectcredit">Subject Credit</label>
                  <input
                    type="number"
                    id="subjectcredit"
                    name="subjectcredit"
                    required
                    className="form-control"
                    value={courseData[submissionCount]?.subjectcredit || ''}
                    readOnly
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
                  <button type="submit">Add</button>
                </div>
              </>
            )}
            {submissionCount >= courses.length && <p>All courses submitted!</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
