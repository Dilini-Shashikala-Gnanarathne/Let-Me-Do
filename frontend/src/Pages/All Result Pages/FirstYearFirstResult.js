import React from 'react';
import Axios from 'axios';
import '../../App.css';
import Background from '../../components/D-Background';
import { useAuth } from '../../context/AuthContext';

const FirstYearFirst = () => {
  const { user } = useAuth();

  const addUser = () => {
    if (!user) {
      console.log('User is not authenticated Dilini');
      return;
    }

    Axios.get('http://localhost:3001/api/getfirstyearfirst', {  email: user.email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('An unexpected error occurred', error);
      });
  };

  // Call addUser function when the component mounts
  React.useEffect(() => {
    addUser();
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <>
      <Background />
      <div>Hi</div>
    </>
  );
};

export default FirstYearFirst;
