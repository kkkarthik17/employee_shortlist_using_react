import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';

function EmpTable({ empitems }) {
    return (
        <Table className = "w-100 mx-auto"responsive striped bordered hover          
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                    <th>Contact Number</th>
                    <th>Salary</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {empitems.map((emp) => (
                        <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.contactNumber}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.age}</td>
                    </tr>
                ))}
            </tbody>
          
        </Table>
    );
}

export default EmpTable;
