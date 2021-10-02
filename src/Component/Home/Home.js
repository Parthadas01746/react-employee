import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/home">Home</NavLink>
            



        </div>
    );
};

export default Home;