import React, { useState } from "react";
import "./ButtonStyles.css";
import "./ActionNeeded.css";
import "../../images/home.png";
import "./mgmt.css";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

const ActionNeededForm = () => {
  const [activeTab, setActiveTab] = useState("actionNeeded");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabContainer">
        <button
          className={`tabButton ${activeTab === "inProgress" ? "active" : ""}`}
          onClick={() => handleTabClick("inProgress")}
        >
          In Progress
        </button>
        <button
          className={`tabButton ${
            activeTab === "toBeAssigned" ? "active" : ""
          }`}
          onClick={() => handleTabClick("toBeAssigned")}
        >
          To Be Assigned
        </button>
        <button
          className={`tabButton ${
            activeTab === "actionNeeded" ? "active" : ""
          }`}
          onClick={() => handleTabClick("actionNeeded")}
        >
          Action Needed
        </button>
        <button className="home-button">
          <NavBtnLink to="/MgmtLandingPage">
            <img
              className="home-img"
              src={require("../../images/home.png")}
              alt="Home"
            />
            HOME
          </NavBtnLink>
        </button>
      </div>

      <div className="case-id">Case Id (BAD_05_2018): Name</div>

      <div className="action-needed-form">
        <div className="form-section-header">Description</div>
        <div>
          <textarea readOnly rows="5" className="desc-box">
            This box will contain the description of the case as written by the
            social worker
          </textarea>
        </div>

        <div className="form-section-header">Problem Faced</div>
        <div>
          <textarea readOnly rows="5" className="desc-box">
            This box will contain the problem as written by the social worker
          </textarea>
        </div>

        <div className="form-section-header">Solution</div>
        <div>
          <textarea
            placeholder="Enter solution"
            rows="5"
            className="desc-box"
          ></textarea>
        </div>

        <button className="form-submit">
          <NavBtnLink to="/ManagementTabsPage">Submit</NavBtnLink>
        </button>
      </div>
    </div>
  );
};

export default ActionNeededForm;
