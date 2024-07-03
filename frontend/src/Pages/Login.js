import { useState } from 'react';
import B1 from '../assets/B1.png';
import B2 from '../assets/B2.png';
import B3 from '../assets/B3.png';
import R2 from '../assets/R2.png';
import R3 from '../assets/R3.png';
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
    <div className='b1'>
    <img src={B1} alt="b1" className='b1' /> 
      <img src={B2} alt="b1" className='b1' />  
      <img src={B3} alt="b1" className='b1' /> 
    </div>
    <div className='b2'>
      <img src={R2} alt="R1" className='b2' />  
      <img src={R3} alt="R1" className='b2' /> 
    </div>
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
