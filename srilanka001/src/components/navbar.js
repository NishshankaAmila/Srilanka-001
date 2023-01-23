import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick]= useState(false);
  const handelClick =() => setClick(!click);
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
        </div>
      </nav> 
    </>
  );
}

export default Navbar
