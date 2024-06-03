import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';

const CreateAccount = () => {
  const [id, setId] =useState(0);
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');
  const[email,setEmail]=useState('');
  const[gender,setGender] = useState()

  return (
    <Grid sx={{padding:'20px',width:'500px',position:'center'}}>
      <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
        Create an <span style={{ color: '#0066ff' }}>account</span>
      </Typography>
      <form >
      <Grid mb={2}>
          <TextField
            fullWidth
            label="Enter ID"
            variant="outlined"
            name="id"
            value={id}
            onChange={e=>setId(e.target.value)}
            required
          />
        </Grid>
        <Grid mb={2}>
          <TextField
            fullWidth
            label="Enter Full Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}
            required
          />
        </Grid>
        <Grid mb={2}>
          <TextField
            fullWidth
            label="Enter Your Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid mb={2}>
          <TextField
            fullWidth
            label="Enter Your Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </Grid>
        <Grid mb={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="role-label">Are you a:</InputLabel>
            <Select
              labelId="role-label"
              label="Are you a:"
              name="role"
              value={gender}
              onChange={e=>setGender(e.target.value)}
            >
              <MenuItem value="viewer">Viewer</MenuItem>
              <MenuItem value="Packing">Packing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid mt={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ py: 2, fontSize: '18px', textTransform: 'none' }}
          >
            Enter
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default CreateAccount;
