import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

  const courses = [
    { code: 'IS3101', name: 'Object Oriented Analysis & Design', credit: 2 },
    { code: 'IS3102', name: 'Data Structures & Algorithms', credit: 2 },
    { code: 'IS3103', name: 'IT Governance', credit: 2 },
    { code: 'IS3104', name: 'Software Engineering', credit: 2 },
    { code: 'IS3105', name: 'IS Risk Management', credit: 2 },
    { code: 'IS3106', name: 'IS Sustainability', credit: 1 },
    { code: 'IS3107', name: 'Management Information Systems', credit: 2 },
    { code: 'IS3108', name: 'E-Business', credit: 1 },
    { code: 'IS3109', name: 'Digital Innovation', credit: 2 }  
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

    Axios.put('http://localhost:3001/api/secondyearfirst', { email: user.email, updates: [data] })
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
            )}
            {submissionCount >= courses.length && <p>All courses submitted!</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
