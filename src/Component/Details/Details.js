import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let  {id} = useParams()
    console.log(id)
    const [Employeedetails,setEmployeeDetails] = useState([])
    const [employee,setEmployee] = useState({})
    useEffect(()=>{
        fetch("../employee-details.JSON")
        .then(res => res.json())
        .then(data => setEmployeeDetails(data.employee))
    },[])

    useEffect(()=>{
       const findEmp =  Employeedetails.find(emp => emp.login.id === id)
       setEmployee(findEmp)
       },[Employeedetails])

       console.log(employee)


    
    return (
        
        <div>
            <h1>Name: {employee?.name}</h1>
            <h2>phone :{employee?.email}</h2>
        </div>
    );
};

export default Details;