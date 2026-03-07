import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="CryptoCurrent Logo" />  
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>

      </div>
    </div>
  );
}

export default Navbar;
