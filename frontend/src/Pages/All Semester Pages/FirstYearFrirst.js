import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import { FirstYearFirstSemesterGPA } from '../All Result Pages/FirstYearFirstGPA';

const GPAComponents = {
  'getfirstyearfirstGPA': FirstYearFirstSemesterGPA,
};

const courses = [
  { code: 'IS1101', name: 'Fundamentals of Information Systems', credit: 2 },
  // { code: 'IS1102', name: 'Structured Programming Techniques', credit: 2 },
  // { code: 'IS1103', name: 'Structured Programming Practicum', credit: 1 },
  // { code: 'IS1104', name: 'Theories of Information Systems', credit: 2 },
  // { code: 'IS1105', name: 'Computer System Organization', credit: 2 },
  // { code: 'IS1106', name: 'Foundations of Web Technologies', credit: 2 },
  // { code: 'IS1107', name: 'Personal Productivity with Information Technology', credit: 1 },
  // { code: 'IS1108', name: 'Fundamentals of Mathematics', credit: 2 },
  // { code: 'IS1109', name: 'Statistics & Probability Theory', credit: 2 },
];

const endpoints = [
  { name: 'First Year First Semester GPA', url: 'getfirstyearfirstGPA', key: 'firstyearfirstGPA' },
];



const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E', 'Skip'];

const FirstYearFirst = () => {
  const [courseData, setCourseData] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [error, setError] = useState(null);
  const { user } = useAuth();

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

  const addUser = (data) => {
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.put('http://localhost:3001/api/firstyearfirst', { email: user.email, updates: [data] })
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

  const GPAComponent = selectedGPA ? GPAComponents[selectedGPA] : null;

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          {submissionCount < courses.length && (
            <form onSubmit={handleSubmit}>
              <h3 className="title">Add Course Details</h3>
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
                  <label htmlFor="subjectcode">Subject Code</label>
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
                  <button type="submit">Add</button>
                </div>
              </>
            </form>
          )}
          {submissionCount >= courses.length && (
            <div className="container-Add">
              {endpoints.map((endpoint, index) => (
                <form key={index} onSubmit={handleSubmitGpa(endpoint.url, endpoint.key)}>
                  <div className="form-group">
                    <button type="submit">{endpoint.name}</button>
                  </div>
                </form>
              ))}
              {error && <p>{error}</p>}
{selectedGPA && GPAComponent[selectedGPA] && React.createElement(GPAComponent[selectedGPA])}
            <p>Dilini</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
