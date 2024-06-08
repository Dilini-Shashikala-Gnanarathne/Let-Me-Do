import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const CreateAccount = ({addUser, submited,data,isEddit,updateUser}) => {
  const [id, setId] =useState(0);
  const[name,setName] = useState('');

  useEffect(() =>{
    if (!submited) {
     setId(0);
     setName(''); 
    }
  },[submited])

  useEffect(()=>{
    if (data?.id&& data.id !==0) {
      setId(data.id);
      setName(data.name);
    }
  },[data])
 

  return (
    <Grid sx={{padding:'20px',width:'500px',position:'center'}}>
      <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
        Create an <span style={{ color: '#0066ff' }}>account</span>
      </Typography>
      <form >
      <Grid mb={2}>
          <TextField
            fullWidth
            label="Enter Course Code"
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
            label="Enter Subject Grade"
            variant="outlined"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}
            required
          />
        </Grid>
        <Grid mt={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>isEddit?updateUser({id,name}):addUser({id,name})}
            sx={{ py: 2, fontSize: '18px', textTransform: 'none' }}
          >
            {isEddit? "Update": "Add"}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default CreateAccount;
