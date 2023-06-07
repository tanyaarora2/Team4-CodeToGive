import React, { useState } from "react";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import "./dashboard-social-navbar.css";
import Calendar from "../../components/Calendar";
import profilephoto from "../../images/profile-photo.jpg";
import PerformanceReport from "./PerformanceReport";
import "./profile.css";
import Form from "./SocialWorkerForm";
const DashboardSocial = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleAddCaseClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <>
      <nav className="navbar-social">
        <div className="left-buttons">
          <button className="NavBtn Navbtnlink" onClick={handleAddCaseClick}>
            Add a case
          </button>
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/AssignedCases">Assigned Cases</NavBtnLink>
          </div>
          {showForm && (
            <div className="form-overlay">
              <div className="add-case-form">
                <Form settShowForm={setShowForm} />
              </div>
            </div>
          )}
        </div>
        <div className="right-buttons">
          {/* <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/Profile">Profile</NavBtnLink> */}
          {/* <button className="NavBtn Navbtnlink"></button>  */}
          {/* </div> */}
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/">Home</NavBtnLink>
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
      <div className={`profile-container ${showForm ? "hidden" : ""}`}>
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
        className={`performance-report-container ${showForm ? "hidden" : ""} ${
          showCalendar ? "hidden" : ""
        }`}
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
