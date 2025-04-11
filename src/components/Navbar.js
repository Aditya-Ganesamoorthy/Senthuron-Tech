import React from 'react';
import './Navbar.css';
import sprLogo from '../assets/sprlogo.png'; // Your SPR logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={sprLogo} alt="SPR" className="spr-logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Brands we operate</a></li>
        <li><a href="#">Business Opportunity</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <a 
        href="https://www.linkedin.com/in/aditya-ganesamoorthy/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="linkedin-button"
      >
        MY LINKED IN PAGE
      </a>
    </nav>
  );
};

export default Navbar;
