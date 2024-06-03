import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'

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
  return (
    <div>
      <UserForm />
      <UserTable rows={users}/>
    </div>
  )
}



export default Users
