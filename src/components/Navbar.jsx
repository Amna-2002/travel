import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/travel.png";
import { Button } from "./Button";  
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const[button, setButton]= useState(true);

  const showButton=() =>{
    if(window.innerWidth <= 960){

      setButton(false)
    }
    else{
      setButton(true)
    }
  };

  useEffect(() => {
      showButton();
      
  },  []);

  window.addEventListener('resize', showButton)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <i class='fab fa-typo3' />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

<li className="nav-items">
           <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
        </li>


        <li className="nav-items">
           <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
        </li>

        <li className="nav-items">
           <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
        </li>

        <li className="nav-items">
           <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>Sign-up</Link>
        </li>

        </ul>
         {button && (
         <Button buttonStyle="btn--black" buttonSize="btn--medium"> SIGN UP</Button>
)}
      </div>
    </nav>
  );
};

export default Navbar;
