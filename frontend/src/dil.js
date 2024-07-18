import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import { 
  FirstYearFirstSemesterGPA,
  FirstYearSecondSemesterGPA,
  SecondYearFirstSemesterGPA,
  SecondYearSecondSemesterGPA,
  ThirdYearFirstSemesterGPA,
  ThirdYearSecondSemesterGPA,
  FourthYearFirstSemesterGPA,
  FourthYearSecondSemesterGPA
} from '../All Result Pages/FirstYearFirstGPA';    

const GPAComponents = {
  'getfirstyearfirstGPA': FirstYearFirstSemesterGPA,
  'getfirstyearsecondGPA': FirstYearSecondSemesterGPA,
  'getsecondyearfirstGPA': SecondYearFirstSemesterGPA,
  'getsecondyearsecondGPA': SecondYearSecondSemesterGPA,
  'getthirdyearfirstGPA': ThirdYearFirstSemesterGPA,
  'getthirdyearsecondGPA': ThirdYearSecondSemesterGPA,
  'getfourthyearfirstGPA': FourthYearFirstSemesterGPA,
  'getfourthyearsecondGPA': FourthYearSecondSemesterGPA
};
const endpoints = [
  { name: 'First Year First Semester GPA', url: 'getfirstyearfirstGPA' },
  { name: 'First Year Second Semester GPA', url: 'getfirstyearsecondGPA' },
  { name: 'Second Year First Semester GPA', url: 'getsecondyearfirstGPA' },
  { name: 'Second Year Second Semester GPA', url: 'getsecondyearsecondGPA' },
  { name: 'Third Year First Semester GPA', url: 'getthirdyearfirstGPA' },
  { name: 'Third Year Second Semester GPA', url: 'getthirdyearsecondGPA' },
  { name: 'Fourth Year First Semester GPA', url: 'getfourthyearfirstGPA' },
  { name: 'Fourth Year Second Semester GPA', url: 'getfourthyearsecondGPA' }
];
const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E', 'Skip'];

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [selectedGPA, setSelectedGPA] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const endpoints = [
    { name: 'First Year First Semester GPA', url: 'getfirstyearfirstGPA' },
    { name: 'First Year Second Semester GPA', url: 'getfirstyearsecondGPA' },
    { name: 'Second Year First Semester GPA', url: 'getsecondyearfirstGPA' },
    { name: 'Second Year Second Semester GPA', url: 'getsecondyearsecondGPA' },
    { name: 'Third Year First Semester GPA', url: 'getthirdyearfirstGPA' },
    { name: 'Third Year Second Semester GPA', url: 'getthirdyearsecondGPA' },
    { name: 'Fourth Year First Semester GPA', url: 'getfourthyearfirstGPA' },
    { name: 'Fourth Year Second Semester GPA', url: 'getfourthyearsecondGPA' }
  ];

  const handleSubmit = (url) => (e) => {
    e.preventDefault();
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post(`http://localhost:3001/api/${url}`, { email: user.email })
      .then(() => {
        console.log("Great job!");
        setSelectedGPA(url); // Set the selected GPA to show the correct component
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
      });
  };
  const FirstYearFirst = () => {

  const GPAComponent = selectedGPA ? GPAComponents[selectedGPA] : null;

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          {endpoints.map((endpoint, index) => (
            <form key={index} onSubmit={handleSubmit(endpoint.url)}>
              <div className="form-group">
                <button type="submit">{endpoint.name}</button>
              </div>
            </form>
          ))}
          {error && <p>{error}</p>}
          {GPAComponent && <GPAComponent />}
        </div>
        </div>
    </>
  );
};
export default FirstYearFirst;