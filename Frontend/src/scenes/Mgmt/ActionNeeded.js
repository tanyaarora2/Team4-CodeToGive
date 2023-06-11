<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ButtonStyles.css';
import './ActionNeeded.css';
import '../../images/home.png';
import './mgmt.css';
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

const ActionNeededForm = ({ CaseNumberAction }) => {
  const [activeTab, setActiveTab] = useState('actionNeeded');
=======
import React, { useState } from "react";
import "./ButtonStyles.css";
import "./ActionNeeded.css";
import "../../images/home.png";
import "./mgmt.css";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

const ActionNeededForm = () => {
  const [activeTab, setActiveTab] = useState("actionNeeded");
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setData(res.data);

      });
  }, []);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const matchingItem = data.find((item) => item.Case_Number === CaseNumberAction);
      if (matchingItem) {
        setFormData(matchingItem);
      }
    }
  }, [data, CaseNumberAction]);
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
<<<<<<< HEAD
          className={`tabButton ${activeTab === 'toBeAssigned' ? 'active' : ''
            }`}
          onClick={() => handleTabClick('toBeAssigned')}
=======
          className={`tabButton ${
            activeTab === "toBeAssigned" ? "active" : ""
          }`}
          onClick={() => handleTabClick("toBeAssigned")}
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
        >
          To Be Assigned
        </button>
        <button
<<<<<<< HEAD
          className={`tabButton ${activeTab === 'actionNeeded' ? 'active' : ''
            }`}
          onClick={() => handleTabClick('actionNeeded')}
        >
          Action Needed
        </button>
        <button className='home-button'><img className='home-img' src={require('../../images/home.png')} alt="Home" />HOME</button>


      </div>

      <div className='case-id'>
        Case Id {formData.Case_Number}: {formData.Child_Name}
      </div>
=======
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
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1

      <div className="action-needed-form">
        <div className="form-section-header">Description</div>
        <div>
<<<<<<< HEAD
          <p> {formData.Case_History}</p>
          {/* <textarea readOnly rows='5' className='desc-box'>{formData.Child_Classification}</textarea> */}
=======
          <textarea readOnly rows="5" className="desc-box">
            This box will contain the description of the case as written by the
            social worker
          </textarea>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
        </div>

        <div className="form-section-header">Problem Faced</div>
        <div>
<<<<<<< HEAD
          <p> {formData.Action_Problem}</p>
=======
          <textarea readOnly rows="5" className="desc-box">
            This box will contain the problem as written by the social worker
          </textarea>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
        </div>

        <div className="form-section-header">Solution</div>
        <div>
<<<<<<< HEAD
          <textarea placeholder='Enter solution' rows='5' className='desc-box'></textarea>
        </div>

        <button className='form-submit'>
          <NavBtnLink to="/ManagementTabsPage">Submit</NavBtnLink></button>

      </div>
    </div>
  );

=======
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
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
};

export default ActionNeededForm;
