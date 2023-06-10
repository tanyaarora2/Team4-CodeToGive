import React, { useState, useEffect } from 'react';
import SearchBarDummy from './SearchBarDummy';
import './ButtonStyles.css';
import './DataTable.css';
import axios from 'axios';
import { NavBtnLink } from "../../components/Navbar/NavbarELements";


const CompletedCases = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setData(res.data);
      });
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const CompletedDetails = (index) => {
    console.log(`Button clicked for row ${index}`);
    // Perform any desired action here
  };

  const renderTableRowsCompleted = () => {
    return data.map((item, index) => (
      <tr key={index}>
        {item.Completed === Boolean(true) && <td>{item.Case_Number}</td>}
        {item.Completed === Boolean(true) && <td>{item.Child_Name}</td>}
        {item.Completed === Boolean(true) && <td>{item.Age}</td>}
        {item.Completed === Boolean(true) && <td>{item.Child_Classification}</td>}
        {item.Completed === Boolean(true) && <td><button className='details-btn' onClick={() => CompletedDetails(index)}>Details</button></td>}
      </tr>
    ));
  };


  const renderContent = () => {
    return (
      <>
        <SearchBarDummy input_width={'80%'} />
        <table className="grid-table-mgmt" style={{ width: '90%' }}>
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Child Name</th>
              <th>Age</th>
              <th>Child Classification</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTableRowsCompleted()}</tbody>
        </table>
      </>
    );
  }


  return (
    <div>
      <div className="tabContainer">
        <button
          className={`tabButton ${activeTab === 'Completed' ? 'active' : ''}`}
          onClick={() => handleTabClick('Completed')}
        >
          Completed Cases
        </button>
        <button style={{ marginLeft: '70%' }} className='home-button'>
          <NavBtnLink to="/MgmtLandingPage">
            <img
              className="home-img"
              src={require("../../images/home.png")}
              alt="Home"
            />
            HOME
          </NavBtnLink></button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default CompletedCases;