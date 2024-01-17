import React, { useState } from 'react';
import EmpTable from './EmpTable';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

const EmpDetails = () => {

    const employeeDetails = [
        {
            id: 1001,
            firstName: 'Elinor',
            lastName: 'Kirlin',
            email: 'Elinor.Kirlin@dummyapis.com',
            contactNumber: 4249498179,
            salary: 55000,
            age: 40
        },
        {
            id: 1002,
            firstName: 'Deanna',
            lastName: 'Mayert',
            email: 'Deanna.Mayert@dummyapis.com',
            contactNumber: 4766098524,
            salary: 65000,
            age: 71
        },
        {
            id: 1003,
            firstName: 'Aaliyah',
            lastName: 'Glover',
            email: 'Aaliyah.Glover@dummyapis.com',
            contactNumber: 4386592446,
            salary: 55000,
            age: 38
        },
        {
            id: 1004,
            firstName: 'Alexane',
            lastName: 'Luettgen',
            email: 'Alexane.Luettgen@dummyapis.com',
            contactNumber: 4989195304,
            salary: 85000,
            age: 41
        },
        {
            id: 1005,
            firstName: 'Forrest',
            lastName: 'Fadel',
            email: 'Forrest.Fadel@dummyapis.com',
            contactNumber: 4482093520,
            salary: 95000,
            age: 59
        }
    ];

    const [empitems, setEmpitems] = useState([...employeeDetails]);

    /* const handleWithoutAnonymous = () => {
         alert("Hai You are ckicked without Anonymous Button !!!.");
     }  */
    const handleButtonClick = (clicked) => {
        console.log("Hai,", clicked);
    }

    const handleButtonFilter = () => {
        const filterItems = empitems.filter(emp => emp.salary >= 85000);
        setEmpitems(filterItems);
        // alert ("Salary is Filter")

    }

    const handleButtonAge = () => {
        const filterAge = empitems.filter(emp => emp.age >= 50);
        setEmpitems(filterAge);
    }

    const handleButtonReset = () => {
        setEmpitems([...employeeDetails]);
    }

    return (
        <>
            <div className="container">
            <h2 className='py-4 my-0 text-center'>Employee Details</h2>
            <EmpTable empitems={empitems} />
            <section className='text-center p-3 d-flex flex-wrap justify-content-center'>
                <Button className="mx-2 my-2" variant="success" onClick={() => handleButtonClick('You are clicked me!')}>Click Me</Button>
                <Button className="mx-2 my-2" variant="primary" onClick={() => handleButtonFilter()}>Salary Filter</Button>
                <Button className="mx-2 my-2" variant="info" onClick={() => handleButtonAge()}>Age Filter</Button>
                <Button className="mx-2 my-2" variant="warning" onClick={() => handleButtonReset()}>Reset Filter</Button>
            </section>
        </div>
        </>
    );
};

export default EmpDetails;