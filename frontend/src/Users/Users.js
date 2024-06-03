import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import { useNavigate } from 'react-router-dom'
const users =[
  {
    id: 1,
    name: 'Shashi',
    email: 'Shashi',
    password: '123',
    gender: 'male',
  },

  {
    id: 2,
    name: 'Shashi',
    email: 'Shashi',
    password: '123',
    gender: 'male'
  }
]
const Users = () => {
const navigate = useNavigate();
  return (
    <div>
      <UserForm />
      <UserTable rows={users}/>
      <button onClick={e=>navigate('/Shows')}>
        Table
      </button>
    </div>
  )
}



export default Users