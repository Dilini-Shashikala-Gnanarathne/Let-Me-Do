import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DeleteIcon from '../assets/delete.png'
const Reports = ({ rows, deleteUser }) => {
  const [gpa, setGPA] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    getGPAData();
  }, []);

  const getGPAData = () => {
    Axios.get('http://localhost:3001/api/getUser')
      .then(response => {
        setGPA(response.data.gpa);
      })
      .catch(error => {
        setError(error.message);
      });
  };
    return (
        <div className="container">
            <h3 className="title">Your Results</h3>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Grade</th>
                        <th>Credit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.credit}</td>
                                {/* <td>
                                    <button className="action-button" onClick={() => selectedUser({ id: row.id, name: row.name })}>Update</button>
                                </td> */}
                                <td>
                                <button className="action-button" onClick={() => deleteUser({ id: row.id })}> <img src={DeleteIcon} alt="Delete" className="delete-icon" style={{ textAlign: 'center', verticalAlign: 'middle', width:'20px',height:'20px' }}/></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="no-data">No Data</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan={4} style={{ textAlign: 'center', verticalAlign: 'middle', fontSize:'14px' }}>
                        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                        <h2>Semester GPA: {gpa.toFixed(2)}</h2>
                    </td>
                    </tr>

                </tfoot>
            </table>
        </div>
    );
};
export default Reports;