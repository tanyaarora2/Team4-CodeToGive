<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./ButtonStyles.css";
import "./DataTable.css";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
const CompletedCases = () => {
  const [activeTab, setActiveTab] = useState("Completed");

  const dataCompleted = [
    {
      column1: "1",
      column2: "BAL/6",
      column3: "ABC",
      column4: "10 years and 2 months",
      column5: "Abandoned",
    },
    {
      column1: "1",
      column2: "BAL/6",
      column3: "ABC",
      column4: "10 years and 2 months",
      column5: "Abandoned",
    },
    {
      column1: "1",
      column2: "BAL/6",
      column3: "ABC",
      column4: "10 years and 2 months",
      column5: "Abandoned",
    },
    // Add more data as needed
  ];

>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
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
<<<<<<< HEAD
        {item.Completed === Boolean(true) && <td>{item.Case_Number}</td>}
        {item.Completed === Boolean(true) && <td>{item.Child_Name}</td>}
        {item.Completed === Boolean(true) && <td>{item.Age}</td>}
        {item.Completed === Boolean(true) && <td>{item.Child_Classification}</td>}
        {item.Completed === Boolean(true) && <td><button className='details-btn' onClick={() => CompletedDetails(index)}>Details</button></td>}
=======
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td>
          <button
            className="details-btn"
            onClick={() => CompletedDetails(index)}
          >
            Details
          </button>
        </td>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
      </tr>
    ));
  };

  const renderContent = () => {
    return (
      <>
<<<<<<< HEAD
        <SearchBarDummy input_width={'80%'} />
        <table className="grid-table-mgmt" style={{ width: '90%' }}>
          <thead>
            <tr>
=======
        <SearchBar input_width={"80%"} />
        <table className="grid-table-mgmt" style={{ width: "90%" }}>
          <thead>
            <tr>
              <th>S.No.</th>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
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
<<<<<<< HEAD
  }

=======
  };
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1

  return (
    <div>
      <div className="tabContainer">
        <button
          className={`tabButton ${activeTab === "Completed" ? "active" : ""}`}
          onClick={() => handleTabClick("Completed")}
        >
          Completed Cases
        </button>
<<<<<<< HEAD
        <button style={{ marginLeft: '70%' }} className='home-button'>
=======

        <button style={{ marginLeft: "70%" }} className="home-button">
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
          <NavBtnLink to="/MgmtLandingPage">
            <img
              className="home-img"
              src={require("../../images/home.png")}
              alt="Home"
            />
            HOME
<<<<<<< HEAD
          </NavBtnLink></button>
=======
          </NavBtnLink>
        </button>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default CompletedCases;
