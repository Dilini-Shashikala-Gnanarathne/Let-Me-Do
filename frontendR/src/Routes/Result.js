import React from 'react'
import UserTable from './Reports'
import Axios from 'axios';
import { useEffect, useState} from 'react'

const Result = () => {
  const[users , setUsers]=useState([]);
  const[isEddit, setIsEddit] = useState(false);
  const[selectedUser, setSelectedUser] = useState({});
  useEffect(() =>{
    getUsers();
  },[]);

  const getUsers = () =>{
    Axios.get('http://localhost:3001/api/users')
    .then(response=>{
      setUsers(response.data?.response||[]);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const deleteUser=(data)=>{
    Axios.post('http://localhost:3001/api/deleteUser', data)
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
      selectedUser={data=>{
        setSelectedUser(data);
        setIsEddit(true);
      }}
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

