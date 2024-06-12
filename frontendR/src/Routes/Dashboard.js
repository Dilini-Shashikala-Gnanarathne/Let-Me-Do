import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashbord = ({  submited, data, isEddit, updateUser }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Result');
  };
  useEffect(() => {
    if (!isSubmitted) {
      setId(0);
      setName('');
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser({ id, name });
    } else {
      addUser({ id, name });
    }
    setSubmissionCount((prevCount) => prevCount + 1);
    setId(0);
    setName('');
  };

  const addUser = (data) => {
    setIsSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post('http://localhost:3001/api/create', payload)
      .then(() => {
        getUsers();
        setIsSubmitted(false);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUsers = () => {
    // Fetch users from the server (implement this function as needed)
  };

  const [num, setNum]= useState(0) // Placeholder variable; replace with actual logic as needed


  return (
    <>
    {num == 0 ? ( <div className="container"><label htmlFor="id">Enter Course Code</label>
          <input
            type="text"
            id="id"
            name="id"
            value={num}
            onChange={e => setNum(e.target.value)}
            required
          /></div>):(
    <div className="container">
      <h3 className="title">
        Create an <span className="highlight">account</span>
      </h3>
      {submissionCount < num ? (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Enter Course Code</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={e => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Subject Grade</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            onClick={() =>  addUser({ id, name })}
          >
           Add
          </button>
          
        </div>
      </form>):(
            <div>
              <button onClick={handleClick}>Go to Result</button>
            </div>
          )}
    </div>)}
    </>
  );
};

export default Dashbord;
