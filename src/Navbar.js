import React from 'react'
import "./Navbar.css";
import logo from './logo.png';

function Navbar() {
    return (
        <div className="nav">
            <img className="nav__logo"
            src={logo}
            alt="Netflix logo"
            />
            <p>Sign In</p>
            
        </div>
    )
}

export default Navbar
