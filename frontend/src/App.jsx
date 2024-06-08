import React from 'react'
import UserForm from './Users/UserForm'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState} from 'react'

const App = () => {
  const[users , setUsers]=useState([]);
  const [submited, setSubmited] = useState(false);
  const[isEddit, setIsEddit] = useState(false);
  const[selectedUser, setSelectedUser] = useState({});
  useEffect(() =>{
    getUsers();
  },[]);
  const navigate = useNavigate();

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
      isEddit(false);
      console.log(556);
        })
    .catch(error=>{
      console.error(error);
      console.log(111);
    })
  }

  const updateUser=(data)=>{
    setSubmited(true);
    const payload={
      id:data.id,
      name:data.name,
    }
    Axios.put('http://localhost:3001/api/usersupdate', payload)
    .then(()=>{
      getUsers();
      setSubmited(false);
      isEddit(false);
      console.log(556);
        })
    .catch(error=>{
      console.error(error);
      console.log(111);
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
      <UserForm  addUser={addUser}
      updateUser={updateUser}
      submited={submited} 
      data={selectedUser}
      isEddit={isEddit}
      />
     
    
      <div>
      <button className="button"  onClick={e=>{navigate('./Users')}}>Click Me</button>
    </div>
    </div>
  )
}



export default App
