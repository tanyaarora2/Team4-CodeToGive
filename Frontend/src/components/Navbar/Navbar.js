import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
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
        <img
          className="bal-asha-logo"
          src={require("../../images/BalAshaLogo.png")}
        ></img>
        <div className="navbar-container">
          <div className="NavBtn Navbtnlink">
            <button className="dropdown-button" onClick={toggleDropdown2}>
              {t("login")}
            </button>
            {isDropdownOpen2 && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/Login">{t("sw")}</Link>
                  </li>
                  <li>
                    <Link to="/LoginCase">{t("cm")}</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="NavBtn">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {t("lang")}
            </button>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li
                  onClick={() => {
                    handleTrans("en");
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    handleTrans("hi");
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  Hindi
                </li>
                <li
                  onClick={() => {
                    handleTrans("mh");
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  Marathi
                </li>
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
