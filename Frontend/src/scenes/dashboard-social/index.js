import React, { useState } from "react";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import "./dashboard-social-navbar.css";
import Calendar from "../../components/Calendar";
import profilephoto from "../../images/profile-photo.jpg";
import PerformanceReport from "./PerformanceReport";
import "./profile.css";
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
          {/* <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/Profile">Profile</NavBtnLink>
            {/* <button className="NavBtn Navbtnlink"></button> */}
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/">Home</NavBtnLink>
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
      <div className="profile-container">
        <div className="profile-photo">
          <img src={profilephoto} alt="profile" />
        </div>
        <div className="profile-details">
          <h2>Profile Details</h2>
          <p>Name: John Doe</p>
          <p>Age: 30</p>
          <p>Address:XXXXXXX</p>
          <p>Orphanages Assigned: XYZ</p>
        </div>
      </div>
      <div
        className="performance-report-container"
        style={{ textAlign: "center" }}
      >
        <h1>Performance Report</h1>
        <div className="charts-container">
          <PerformanceReport />
        </div>
      </div>
    </>
  );
};

export default DashboardSocial;
