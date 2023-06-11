<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchBarDummy from './SearchBarDummy';
import './ButtonStyles.css';
import './DataTable.css';
import CheckBox from './CheckBox';
import axios from 'axios'
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import ParentComponent from "./tobeassigned";


const ManagementTabsPage = ({ setSelectedCaseNumber, setCaseNumberAction }) => {
  const [activeTab, setActiveTab] = useState('toBeAssigned');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setData(res.data);
      });
  }, []);

  const navigate = useNavigate();

  const dataToBeAssigned = [
    { column1: 'BAL/6', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned' },
    { column1: 'BAL/7', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned' },
    { column1: 'BAL/8', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned' },
    { column1: 'BAL/9', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned' },
    // Add more data as needed
  ];


=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ButtonStyles.css";
import "./DataTable.css";
import CheckBox from "./CheckBox";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import ParentComponent from "./tobeassigned";

const ManagementTabsPage = ({ setSelectedCaseNumber }) => {
  const [activeTab, setActiveTab] = useState("inProgress");
  const navigate = useNavigate();

  const dataInProgress = [
    {
      column1: "1",
      column2: "BAL/6",
      column3: "ABC",
      column4: 10,
      column5: "Abandoned",
    },
    {
      column1: "2",
      column2: "BAL/7",
      column3: "ABC",
      column4: 11,
      column5: "Abandoned",
    },
    {
      column1: "3",
      column2: "BAL/8",
      column3: "ABC",
      column4: 8,
      column5: "Abandoned",
    },
    // Add more data as needed
  ];

  const dataToBeAssigned = [
    {
      column1: "BAL/6",
      column2: "ABC",
      column3: "Mumbai Suburban",
      column4: "Abandoned",
    },
    {
      column1: "BAL/7",
      column2: "ABC",
      column3: "Mumbai Suburban",
      column4: "Abandoned",
    },
    {
      column1: "BAL/8",
      column2: "ABC",
      column3: "Mumbai Suburban",
      column4: "Abandoned",
    },
    {
      column1: "BAL/9",
      column2: "ABC",
      column3: "Mumbai Suburban",
      column4: "Abandoned",
    },
    // Add more data as needed
  ];

  const dataActionNeeded = [
    {
      column1: "1",
      column2: "BAL/73",
      column3: "XYZ",
      column4: 11,
      column5: "Surrendered",
    },
    {
      column1: "2",
      column2: "BAL/74",
      column3: "XYZ",
      column4: 11,
      column5: "Surrendered",
    },
    {
      column1: "3",
      column2: "BAL/75",
      column3: "XYZ",
      column4: 11,
      column5: "Surrendered",
    },
    // Add more data as needed
  ];
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const inProgressDetails = (item, index) => {
    console.log(`Button clicked for row ${index}`);
    // Fetch the case number
    const caseNumber = item.column2;
    setSelectedCaseNumber(caseNumber);
    navigate("/EachCasePage");
  };

  const ActionNeededDetails = (item, index) => {
    console.log(`Button clicked for row ${index}`);
    // Fetch the case number
    const caseNumber = item.Case_Number;
    setCaseNumberAction(caseNumber);
    navigate('/ActionNeeded');
  };
  // Perform any desired action here

  // const renderTableRowsInProgress = () => {
  //   return ();
  //     <>



  //       {data.map((item, index) => (
  //         <tr>
  //           {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Case_Number}</td>}
  //           {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Name}</td>}
  //           {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Classification}</td>}
  //           {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Age}</td>}
  //           {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td><button className='details-btn' onClick={() => inProgressDetails(index)}>Details</button></td>}

  //         </tr>
  //       ))}

  //     </>
  // };

<<<<<<< HEAD

  const renderTableRowsToBeAssigned = () => {
    return (
      <>
        {data.map((item, index) => (
          <tr>
            {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Case_Number}</td>}
            {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Name}</td>}
            {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Classification}</td>}
            {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Age}</td>}
            {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td><CheckBox /></td>}


          </tr>
        ))}</>
    )
  };

  const renderTableRowsActionNeeded = () => {
    return (
      <>

        {data.map((item, index) => (
          <tr>
            {item.Action === Boolean(true) && <td>{item.Case_Number}</td>}
            {item.Action === Boolean(true) && <td>{item.Child_Name}</td>}
            {item.Action === Boolean(true) && <td>{item.Age}</td>}
            {item.Action === Boolean(true) && <td>{item.Child_Classification}</td>}

            {item.Action === Boolean(true) && <td><button className='details-btn' onClick={() => ActionNeededDetails(item, index)}>Details</button></td>}

          </tr>
        ))}

      </>
    )
=======
  const renderTableRowsInProgress = () => {
    return dataInProgress.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td>
          <button
            className="details-btn"
            onClick={() => inProgressDetails(item, index)}
          >
            Details
          </button>
        </td>
      </tr>
    ));
  };

  const renderTableRowsToBeAssigned = () => {
    return dataToBeAssigned.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>
          <CheckBox />
        </td>
      </tr>
    ));
  };

  const renderTableRowsActionNeeded = () => {
    return dataActionNeeded.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td>
          <button
            className="details-btn"
            onClick={() => ActionNeededDetails(index)}
          >
            <NavBtnLink to="/ActionNeeded">Details</NavBtnLink>
          </button>
        </td>
      </tr>
    ));
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
  };

  const renderContent = () => {
    switch (activeTab) {
      case "inProgress":
        return (
          <>
<<<<<<< HEAD
            <SearchBar setSelectedCaseNumber={setSelectedCaseNumber} input_width={'80%'} />
            {/* <table className="grid-table-mgmt" style={{ width: '90%' }}>
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
              <tbody>{renderTableRowsInProgress()}</tbody>
            </table> */}
          </>
        );
      case "toBeAssigned":
        return (
          <>
<<<<<<< HEAD
            <SearchBarDummy input_width={'30%'} />
            <span>
              <table className="grid-table-mgmt" style={{ width: '40%' }}>
                <thead>
                  <tr>
                    <th>Case Number</th>
                    <th>Child Name</th>
                    <th>Age</th>
                    <th>Classification</th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>{renderTableRowsToBeAssigned()}</tbody>
              </table>
              <ParentComponent />
            </span>
=======
            <SearchBar input_width={"30%"} />
            <div className="tobeAssignedContainer">
              <div className="tobeAssignedtable">
                <table className="grid-table-mgmt" style={{ width: "90%" }}>
                  <thead>
                    <tr>
                      <th>Case Number</th>
                      <th>Child Name</th>
                      <th>District</th>
                      <th>Classification</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRowsToBeAssigned()}</tbody>
                </table>
              </div>
              <div className="tobeAssignedParent">
                <ParentComponent />
              </div>
            </div>
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
          </>
        );
      case "actionNeeded":
        return (
          <>
<<<<<<< HEAD
            <br></br>
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
              <tbody>{renderTableRowsActionNeeded()}</tbody>
            </table>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabContainer">
        <button
<<<<<<< HEAD
          className={`tabButton ${activeTab === 'toBeAssigned' ? 'active' : ''
            }`}
          onClick={() => handleTabClick('toBeAssigned')}
=======
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
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
        >
          To Be Assigned
        </button>
        <button
<<<<<<< HEAD
          className={`tabButton ${activeTab === 'inProgress' ? 'active' : ''}`}
          onClick={() => handleTabClick('inProgress')}
        >
          In Progress
        </button>

        <button
          className={`tabButton ${activeTab === 'actionNeeded' ? 'active' : ''
            }`}
          onClick={() => handleTabClick('actionNeeded')}
=======
          className={`tabButton ${
            activeTab === "actionNeeded" ? "active" : ""
          }`}
          onClick={() => handleTabClick("actionNeeded")}
>>>>>>> 6d7adcb8278bd1d9ac7d5a4714ec9b4c872a3cb1
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
      <div>{renderContent()}</div>
    </div>
  );
};

export default ManagementTabsPage;
