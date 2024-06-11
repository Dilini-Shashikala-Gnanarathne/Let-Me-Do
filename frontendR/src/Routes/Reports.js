import React from 'react';
import './UserTable.css'; // Import your CSS file

const Reports = ({ rows, selectedUser, deleteUser }) => {
    return (
        <div className="container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Grade</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>
                                    <button className="action-button" onClick={() => selectedUser({ id: row.id, name: row.name })}>Update</button>
                                </td>
                                <td>
                                <button className="action-button" onClick={() => deleteUser({ id: row.id })}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="no-data">No Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default Reports;