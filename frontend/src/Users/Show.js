import React from 'react'
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
const Shows = () => {
  return (
    <div>
      <UserTable rows={users}/>
    </div>
  )
}



export default Shows;
