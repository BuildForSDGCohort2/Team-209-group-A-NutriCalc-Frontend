import React from 'react';
import "./Navigation.css"
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div className="nav">
        <div className="nav-header">
          <h1>NutriCalc</h1>
          <h5>Your farm inputs calculator</h5>
        </div>

        <NavLink classname="nav-link" to="/">
          Home
        </NavLink>
        <NavLink classname="nav-link" to="/about">
          About
        </NavLink>
        <NavLink classname="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    );
}
 
export default Navigation;