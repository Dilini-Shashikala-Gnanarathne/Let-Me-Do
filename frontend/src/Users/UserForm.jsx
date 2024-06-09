import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAccount = ({ addUserProp, submitted, data, isEdit, updateUser }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

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
    <Grid sx={{ padding: '20px', width: '500px', position: 'center' }}>
      {num == 0 ? (
        <TextField
          fullWidth
          label="Enter Subject Grade"
          variant="outlined"
          name="number"
          value={num}
          required
          onChange={(e) => setNum(e.target.value)}

        />
      ) : (
        <>
          <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
            Create an <span style={{ color: '#0066ff' }}>account</span>
          </Typography>
          {submissionCount < num ? (
            <form onSubmit={handleSubmit}>
              <Grid mb={2}>
                <TextField
                  fullWidth
                  label="Enter Course Code"
                  variant="outlined"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </Grid>
              <Grid mb={2}>
                <TextField
                  fullWidth
                  label="Enter Subject Grade"
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ py: 2, fontSize: '18px', textTransform: 'none' }}
                >
                  {isEditing ? 'Update' : 'Add'}
                </Button>
              </Grid>
            </form>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('./Users')}
            >
              Click Me
            </Button>
          )}
        </>
      )}
    </Grid>
  );
};

export default CreateAccount;
