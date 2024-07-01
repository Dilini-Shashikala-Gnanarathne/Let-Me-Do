import { useState } from 'react';
import '../App.css'
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
    <div className="container">
      <form>
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
              <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Login
