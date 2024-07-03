import { useState } from 'react';
import Backgrount from '../components/Backgrount';
import './Login.css';

const Login = () => {
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
    <div className='container'>
    <h1 className='login'>Login</h1>
    <form onSubmit={handleSubmit}>
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
              <button type="submit" className='login-button'>Add</button>
      </form>
    </div>
    </>
  )
}

export default Login
