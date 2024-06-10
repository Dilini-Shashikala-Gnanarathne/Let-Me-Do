import React, { useEffect, useState } from 'react';
import '../App.css';

const Dashbord = ({ addUser, submited, data, isEddit, updateUser }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!submited) {
      setId(0);
      setName('');
    }
  }, [submited]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <div className="container">
      <h3 className="title">
        Create an <span className="highlight">account</span>
      </h3>
      <form>
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
            onClick={() => (isEddit ? updateUser({ id, name }) : addUser({ id, name }))}
          >
            {isEddit ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashbord;
