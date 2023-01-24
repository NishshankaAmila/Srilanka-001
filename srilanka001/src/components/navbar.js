import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick]= useState(false);

  const handelClick =() => setClick(!click);
  const closeMobileMenu =() => setClick(false);

  return (
  
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i class="fa-sharp fa-solid fa-location-dot"></i>
          </Link>
          <diV className="menu-icon" onClick={handelClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </diV>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className= "nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Places" className= "nav-links" onClick={closeMobileMenu}>
              Places
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className= "nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Sing Up" className= "nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav> 
    </>
  );
}

export default Navbar
