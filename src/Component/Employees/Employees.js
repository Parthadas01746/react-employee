import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Employees.css'
const Employees = () => {
const [employees,setEmployees] = useState([])

    useEffect(()=>{
        fetch("./employee.JSON")
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])

    return (
        <div>
        <h1>hello we are from Employees</h1>
        <div className="employees">
        {
            employees.map(employee => (
                <div className='employee'>
                    
                    <h1>Name: {employee.name}</h1>
                    <h2>ID: {employee.id}</h2>
                    <h2>Designation: {employee.designation}</h2>
                    <button><NavLink to={`/details/${employee.id}`}>Details</NavLink></button>
                    
                </div>
            ))
        }
        </div>

        </div>
    );
};

export default Employees;