import React from 'react';
import { useState } from 'react';
import Backgrount from '../components/Backgrount';
import { Link } from 'react-router-dom'; 
import './Register.css'
const Signup = () => {
    const [formData,setFormData] =useState({
            id: '',
            name: '',
            password: '',
            email: '',	});
    
            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
                }));
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                alert("hi");
              };
            
  return (
    <>    
    <Backgrount/>
    <div className="container-regi">
        <h2>
            Create an <span>Account</span>
        </h2>
        <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id">Enter Your Name</label>
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
                <label htmlFor="name">Enter Your Register Number</label>
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
              <label htmlFor="id">Enter Your Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                value={formData.email}
                onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Enter Your Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                value={formData.password}
                onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className='regi-button'>Add</button><br/>
              <h7>Already account<span><Link to="/login">Login</Link></span></h7>
            </form>
    </div>
    </>

  )
}

export default Signup
