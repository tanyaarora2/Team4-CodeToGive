import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ButtonStyles.css';
import './ActionNeeded.css';
import '../../images/home.png';
import './mgmt.css';
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

const ActionNeededForm = ({ CaseNumberAction }) => {
  const [activeTab, setActiveTab] = useState('actionNeeded');

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
          className={`tabButton ${
            activeTab === 'toBeAssigned' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('toBeAssigned')}
        >
          To Be Assigned
        </button>
        <button
          className={`tabButton ${
            activeTab === 'actionNeeded' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('actionNeeded')}
        >
          Action Needed
        </button>
        <button
          className={`tabButton ${activeTab === 'inProgress' ? 'active' : ''}`}
          onClick={() => handleTabClick('inProgress')}
        >
          Active Cases
        </button>
        <button className='home-button'><img className='home-img' src={require('../../images/home.png')} alt="Home" />HOME</button>


      </div>

      <div className='case-id'>
        Case Id {formData.Case_Number}: {formData.Child_Name}
      </div>

      <div className='action-needed-form'>
        <div className='form-section-header'>Description</div>
        <div>
          <p> {formData.Case_History}</p>
          {/* <textarea readOnly rows='5' className='desc-box'>{formData.Child_Classification}</textarea> */}
        </div>

        <div className='form-section-header'>Problem Faced</div>
        <div>
          <p> {formData.Action_Problem}</p>
        </div>

        <div className='form-section-header'>Solution</div>
        <div>
          <textarea placeholder='Enter solution' rows='5' className='desc-box'></textarea>
        </div>

        <button className='form-submit'>
          <NavBtnLink to="/ManagementTabsPage">Submit</NavBtnLink></button>

      </div>
    </div>
  );

};

export default ActionNeededForm;