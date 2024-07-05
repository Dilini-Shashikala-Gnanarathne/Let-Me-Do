import React, { useState } from 'react';
import Backgrount from '../components/Backgrount'; 
import { Link } from 'react-router-dom'; 
import Axios from 'axios';
import './Register.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    password: '',
    email: '',
    role:'viewer',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      password: '',
      email: '',  
    });
  };

  const addUser = (data) => {
    Axios.post('http://localhost:3001/api/createUser', data)
      .then(() => {
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

  return (
    <>    
      <Backgrount />
      <div className="container-regi">
        <h2>
          Create an <span>Account</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Enter Your Register Number</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className='regi-button'>Add</button><br />
          {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <span><Link to="/login">Login</Link></span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
