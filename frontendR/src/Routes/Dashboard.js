import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ data, updateUser }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const[credit, setCredit]=useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [num, setNum] = useState('');
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
      setCredit(data.credit);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser({ id, name,credit });
    } else {
      addUser({ id, name,credit });
    }
    setSubmissionCount((prevCount) => prevCount + 1);
    setId('');
    setName('');
    setCredit('');
  };

  const addUser = (data) => {
    setIsSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
      credit:data.credit,
    };
    Axios.post('http://localhost:3001/api/create', payload)
      .then(() => {
        setIsSubmitted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick1 = () => {
    setClick(true);
  };
  const handleClick = () => {
    navigate('/Result');
  };

  return (
    <>
      {!click ? (
        <div className="container">
          
          <div className="form-group">
          <label htmlFor="num">Enter Number of Courses</label>
          <input
            type="number"
            id="num"
            name="num"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            required
          />
          </div>
          <button onClick={handleClick1}>
            Submit
          </button>
        </div>
      ) : (
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
                  onChange={(e) => setId(e.target.value)}
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
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="credit">Enter Number of Credits</label>
                <input
                  type="text"
                  id="credit"
                  name="credit"
                  value={credit}
                  onChange={(e) => setCredit(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">
                  Add
                </button>
              </div>
            </form>
          ) : (
            <div>
              <button onClick={handleClick}>Go to Result</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
