import React, { useState } from "react";
import "./Navbar.css";
import { NavBtnLink } from "./NavbarELements";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="home-navbar">
        <div className="navbar-container">
          <div className="NavBtn">
            <div className="Navbtnlink">
              <NavBtnLink to="Login">Log In</NavBtnLink>
            </div>
          </div>
          <div className="NavBtn">
            {/* <div className="Navbtnlink"> */}
            <button className="dropdown-button" onClick={toggleDropdown}>
              Language
            </button>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>Hindi</li>
                <li>Marathi</li>
                <li>Kannada</li>
                {/* Add more language options as needed */}
              </ul>
            </div>
          )}
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
