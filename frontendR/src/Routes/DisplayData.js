import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DisplayGPA = () => {
  const [counts, setCounts] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    getGPAData();
  }, []);

  const getGPAData = () => {
    Axios.get('http://localhost:3001/api/getUser')
      .then(response => {
        setCounts(response.data.counts);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1>GPA Count</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        <li>Total Count: {counts}</li>
        <li>Total Count: </li>

      </ul>
    </div>
  );
};

export default DisplayGPA;


// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const DisplayGPA = () => {
//   const [counts, setCounts] = useState({ A: 0, B: 0, C: 0, D: 0 });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     getGPAData();
//   }, []);

//   const getGPAData = () => {
//     Axios.get('http://localhost:3001/api/getUser')
//       .then(response => {
//         setCounts(response.data.count);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>GPA Counts</h1>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <ul>
//         <li>A: {counts.A}</li>
//         <li>B: {counts.B}</li>
//         <li>C: {counts.C}</li>
//         <li>D: {counts.D}</li>
//       </ul>
//     </div>
//   );
// };

// export default DisplayGPA;


