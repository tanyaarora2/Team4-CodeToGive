import React, { useState } from "react";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import "./dashboard-social-navbar.css";
import Calendar from "../../components/Calendar";
const DashboardSocial = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
      <nav className="navbar-social">
        <div className="left-buttons">
          <button className="NavBtn Navbtnlink">Add a case</button>
          <button className="NavBtn Navbtnlink">Assigned Case</button>
        </div>
        <div className="right-buttons">
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/Profile">Profile</NavBtnLink>
            {/* <button className="NavBtn Navbtnlink"></button> */}
          </div>
          <button
            className="NavBtn Navbtnlink"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            Weekly Calendar{" "}
          </button>
          {showCalendar && <Calendar />}
        </div>
      </nav>
    </>
  );
};

export default DashboardSocial;
