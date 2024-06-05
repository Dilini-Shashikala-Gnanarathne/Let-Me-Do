import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import Axios from 'axios';
import { useEffect, useState} from 'react'

const Users = () => {
  const[users , setUsers]=useState([]);
  const [submited, setSubmited] = useState(false);

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


  const addUser=(data)=>{
    setSubmited(true);
    const payload={
      id:data.id,
      name:data.name,
    }
    Axios.post('http://localhost:3001/api/create', payload)
    .then(()=>{
      getUsers();
      setSubmited(false);
      console.log(556);
        })
    .catch(error=>{
      console.error(error);
      console.log(111);
    })
  }
  return (
    <div>
      <UserForm  addUser={addUser}/>
     
    
      <div>
      <UserTable rows={users}/>
    </div>
    </div>
  )
}



export default Users
