import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';


const FirstYearFirst = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
  });


  const handleSubmit = (e) => {
    e.preventDefault();
      addUser();
  };

  const addUser = (data) => {
    if (!user) {
      setError('User is not authenticated');
      return;
    }

    Axios.post('http://localhost:3001/api/getfirstyearfirst', { email: user.email })
      .then(() => {
       console.log("Great job!");
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
        </div>
      </div>
    </>
  );
};

export default FirstYearFirst;
