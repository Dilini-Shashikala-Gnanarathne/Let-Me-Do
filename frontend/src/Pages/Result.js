import React from 'react'
import UserTable from './Reports'
import Axios from 'axios';
import { useEffect, useState} from 'react'

const Result = () => {
  const[users , setUsers]=useState([]);
  useEffect(() =>{
    getUsers();
  },[]);

  const getUsers = () =>{
    Axios.get('https://let-me-do-mexj.onrender.com/api/users')
    .then(response=>{
      setUsers(response.data?.response||[]);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const deleteUser=(data)=>{
    Axios.post('https://let-me-do-mexj.onrender.com/api/deleteUser', data)
    .then(()=>{
      getUsers();
      console.log(1);
        })
    .catch(error=>{
      console.error(error);
      
    })
  }
  return (
      <div>
      <UserTable rows={users}
      deleteUser={data => {
        if (window.confirm("Are you sure you want to delete?")) {
          deleteUser(data); 
          console.log('deleteUser');
        }
      }}     
      />
    </div>
  )
}

export default Result

