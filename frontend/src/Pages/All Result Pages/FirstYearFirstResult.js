import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';
import FirstYearFirstGPA from '../All Result Pages/FirstYearFirstGPA';	

const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const [showGPA, setShowGPA] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  const addUser = () => {
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post('http://localhost:3001/api/getfirstyearfirstGPA', { email: user.email })
      .then(() => {
        console.log("Great job!");
        setShowGPA(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  return (
    <>
      <Background />
      <div>
        <div className="container-Add">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <button type="submit">Add</button>
            </div>
          </form>
          {error && <p>{error}</p>}
          {showGPA && <FirstYearFirstGPA />}
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
