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



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const inProgressDetails = (item, index) => {
    console.log(`Button clicked for row ${index}`);
    // Fetch the case number
    const caseNumber = item.column2;
    setSelectedCaseNumber(caseNumber);
    navigate('/EachCasePage');
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
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'inProgress':
        return (
          <>
            <SearchBar setSelectedCaseNumber={setSelectedCaseNumber} input_width={'80%'} />
            {/* <table className="grid-table-mgmt" style={{ width: '90%' }}>
              <thead>
                <tr>
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
      case 'toBeAssigned':
        return (
          <>
            <SearchBarDummy input_width={"30%"} />
            <div className="tobeAssignedContainer">
              <div className="tobeAssignedtable">
                <table className="grid-table-mgmt" style={{ width: "90%" }}>
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
              </div>
              <div className="tobeAssignedParent">
                <ParentComponent />
              </div>
            </div>
          </>
        );
      case 'actionNeeded':
        return (
          <>
            <SearchBarDummy input_width={"80%"}></SearchBarDummy>
            <br></br>
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
          className={`tabButton ${activeTab === 'toBeAssigned' ? 'active' : ''
            }`}
          onClick={() => handleTabClick('toBeAssigned')}
        >
          To Be Assigned
        </button>
        <button
          className={`tabButton ${activeTab === 'actionNeeded' ? 'active' : ''
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