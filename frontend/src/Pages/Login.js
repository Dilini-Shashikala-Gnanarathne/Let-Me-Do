import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Backgrount'; 
import Axios from 'axios';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loging(formData);
    };

    const loging = (data) => {
        Axios.post('http://localhost:3001/api/login', data)
            .then((response) => {
                const { token, email } = response.data;
                console.log(`Login:${token}`);

                if (token) {
                    localStorage.setItem(`authToken`, token);
                    setError(null);
                    navigate('/home');
                } else {
                    setError('Login failed: no token received');
                }
                console.log(token);
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
            <div className='container'>
                <h1 className='login-title'>Login</h1>
                <form onSubmit={handleSubmit}>
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
                    {error && <p className='error-message'>{error}</p>}
                    <button type="submit" className='login-button'>Login</button>
                </form>
            </div>
        </>
    );
};

export default Login;