import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/travel.png";
import { Button } from "./Button";
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // 👇 Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <i className="fab fa-typo3" />
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
            <Link to="/destination" className="nav-links" onClick={closeMobileMenu}>Destination</Link>
          </li>

          <li className="nav-items dropdown" ref={dropdownRef}>
            <span
              className="nav-links"
              onClick={() => setDropdown(!dropdown)}
            >
              Packages ▾
            </span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/discover-pakistan" className="dropdown-link" onClick={closeMobileMenu}>
                    Discover Pakistan
                  </Link>
                </li>
                <li>
                  <Link to="/international-tours" className="dropdown-link" onClick={closeMobileMenu}>
                    International Tours
                  </Link>
                </li>

                
              </ul>
            )}

            
          </li>

         <li className="nav-items">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>

    
        <Button buttonStyle="btn--black" buttonSize="btn--medium">SIGN UP</Button>
      </div>
    </nav>
  );
};

export default Navbar;
