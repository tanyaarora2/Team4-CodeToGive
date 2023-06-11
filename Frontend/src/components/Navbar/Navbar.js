import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ hindi, setHindi }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <>
      <nav className="home-navbar">
            <img className="bal-asha-logo" src={require("../../images/BalAshaLogo.png")}></img>
        <div className="navbar-container">
          <div className="NavBtn Navbtnlink">
            <button className="dropdown-button" onClick={toggleDropdown2}>
              Log In
            </button>
            {isDropdownOpen2 && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/Login">Social Worker</Link>
                  </li>
                  <li>
                    <Link to="/LoginCase">Case Manager</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="NavBtn">
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
