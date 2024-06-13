import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DisplayGPA = () => {
  const [gpa, setGPA] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    getGPAData();
  }, []);

  const getGPAData = () => {
    Axios.get('http://localhost:3001/api/getUser')
      .then(response => {
        setGPA(response.data.gpa);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1>GPA Calculation</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <h2>Total GPA: {gpa.toFixed(2)}</h2>
    </div>
  );
};

export default DisplayGPA;



