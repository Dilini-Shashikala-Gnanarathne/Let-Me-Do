import React, { createContext, useState, useContext, useEffect } from 'react';
import Axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/api/user');
        console.log(11111111111);
        setUser(response.data);
      } catch (error) {
        console.log(4444444444);
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
