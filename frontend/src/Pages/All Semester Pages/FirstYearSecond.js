import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import { 
  FirstYearSecondSemesterGPA,
} from '../All Result Pages/FirstYearFirstGPA';    

const GPAComponent = {
  'getfirstyearsecondGPA': FirstYearSecondSemesterGPA,
};
const endpoints = [
  { name: 'First Year Second Semester GPA', url: 'getfirstyearsecondGPA' },
];
const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E', 'Skip'];

const courses = [
  { code: 'IS2101', name: 'Object Oriented Programming', credit: 2 },
  { code: 'IS2102', name: 'Object Oriented Programming Practicum', credit: 1 },
  { code: 'IS2103', name: 'Emerging IS Technologies', credit: 1 },
  { code: 'IS2104', name: 'Database Systems', credit: 2 },
  { code: 'IS2105', name: 'Database Management Systems Practicum', credit: 1 },
  { code: 'IS2106', name: 'System Analysis & Design', credit: 1 },
  { code: 'IS2107', name: 'Social & Professional Issues', credit: 1 },
  { code: 'IS2108', name: 'Human Computer Interaction', credit: 2 },
  { code: 'IS2109', name: 'Information Assurance & Security', credit: 2 },
  { code: 'IS2110', name: 'Software Project Initiation & Planning', credit: 1 },
  { code: 'IS2111', name: 'Advanced Mathematics', credit: 2 }
];

const FirstYearSecond = () => {
  const [courseData, setCourseData] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showGpaLink, setShowGpaLink] = useState(false);
  useEffect(() => {
    if (submissionCount < courses.length) {
      setCourseData((prevData) => [
        ...prevData,
        {
          subjectcode: courses[submissionCount].code,
          subjectname: courses[submissionCount].name,
          subjectcredit: courses[submissionCount].credit,
          grade: '',
        },
      ]);
    }
  }, [submissionCount]);

  const handleGradeSelection = (grade, index) => {
    const updatedData = [...courseData];
    updatedData[index].grade = grade;
    setCourseData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submissionCount < courses.length) {
      addUser(courseData[submissionCount]);
    }
  };
const handleClick = () => {
    setShowGpaLink(true);
  };
  const addUser = (data) => {
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.put('http://localhost:3001/api/firstyearsecond', { email: user.email, updates: [data] })
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

  const [selectedGPA, setSelectedGPA] = useState(null);

  const handleSubmitGpa = (url, key) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log('Successfully fetched GPA data for', url);
        setSelectedGPA(key);
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
        grade: '',
      },
    ]);
  };

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          {submissionCount < courses.length && (
            <form onSubmit={handleSubmit}>
              <h3 className="title">Add Course Details</h3>
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
                <div className="grade-selection">
                  {grades.map((grade) => (
                    <button
                      type="button"
                      key={grade}
                      className={`grade-button ${courseData[submissionCount]?.grade === grade ? 'selected' : ''}`}
                      onClick={() => handleGradeSelection(grade, submissionCount)}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="container-Add-gpa-result">Add</button>

              </div>
            </form>
           )}
       {submissionCount >= courses.length && (
  <div className="container-Add-gpa">
    {endpoints.map((endpoint, index) => (
      <form key={index} onSubmit={handleSubmitGpa(endpoint.url, endpoint.key)}>
        <div className="form-group">
        <button 
        type="submit" 
        className='grade-selection-buttons-all-semester-end'
        onClick={handleClick}
      > 
        {endpoint.name}
      </button>
      {showGpaLink && (
        <Link to={'/getGPA'} className='link-dec'>
 <div className='new-final'>
          <Link to={'/getGPA'} className='link-dec'>
          <p>See Your GPA ✨</p>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
        </Link>
        </div>        </Link>
      )}
        </div>
      </form>
    ))}
    {error && <p>{error}</p>}
  </div>
)}     
        </div>
      </div>
    </>
  );
};

export default FirstYearSecond;
