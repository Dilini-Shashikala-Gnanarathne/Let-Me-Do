import React from 'react';
import { useAuth, useEmail } from '../../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const email = useEmail();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-Add">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
