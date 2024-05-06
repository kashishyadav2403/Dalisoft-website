import React from 'react';
//import Images from '../Images/DalisoftLogoRemovedBG.png';
import '../ComponentsCSS/Header.css'; // Importing CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#Home">
          {/* <img src={Images} alt="Company Logo" /> */}
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#AboutUs">About Us</a></li>
          <li><a href="#Projects">Our Projects</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Career">Career</a></li>
          <li><a href="#Gallery">Gallery</a></li>
          <li><a href="#ContactUs">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
