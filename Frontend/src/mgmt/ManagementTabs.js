import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './ButtonStyles.css';
import './DataTable.css';
import CheckBox from './CheckBox';

const ManagementTabsPage = ({ setSelectedCaseNumber }) => {
  const [activeTab, setActiveTab] = useState('inProgress');
  const navigate = useNavigate(); 

  const dataInProgress = [
    { column1: '1', column2: 'BAL/6', column3: 'ABC', column4: 10, column5: 'Abandoned'},
    { column1: '2', column2: 'BAL/7', column3: 'ABC', column4: 11, column5: 'Abandoned'},
    { column1: '3', column2: 'BAL/8', column3: 'ABC', column4: 8, column5: 'Abandoned'},
    // Add more data as needed
  ];

  const dataToBeAssigned = [
    { column1: 'BAL/6', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned'},
    { column1: 'BAL/7', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned'},
    { column1: 'BAL/8', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned'},
    { column1: 'BAL/9', column2: 'ABC', column3: 'Mumbai Suburban', column4: 'Abandoned'},
    // Add more data as needed
  ];

  const dataActionNeeded = [
    { column1: '1', column2: 'BAL/73', column3: 'XYZ', column4: 11, column5: 'Surrendered'},
    { column1: '2', column2: 'BAL/74', column3: 'XYZ', column4: 11, column5: 'Surrendered'},
    { column1: '3', column2: 'BAL/75', column3: 'XYZ', column4: 11, column5: 'Surrendered'},
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

  const ActionNeededDetails = (index) => {
    console.log(`Button clicked for row ${index}`);
    // Perform any desired action here
  };

  const renderTableRowsInProgress = () => {
    return dataInProgress.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td><button className='details-btn' onClick={() => inProgressDetails(item, index)}>Details</button></td>
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
        <td><CheckBox /></td>
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
        <td><button className='details-btn' onClick={() => ActionNeededDetails(index)}>Details</button></td>
      </tr>
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'inProgress':
        return (
          <>
            <SearchBar input_width={'80%'}/>
            <table className="grid-table-mgmt" style={{width: '90%'}}>
              <thead>
                <tr>
                <th>S.No.</th>
                <th>Case Number</th>
                <th>Child Name</th>
                <th>Age</th>
                <th>Child Classification</th>
                <th></th>
                </tr>
              </thead>
              <tbody>{renderTableRowsInProgress()}</tbody>
            </table>
          </>
        );
      case 'toBeAssigned':
        return (
          <>
            <SearchBar input_width={'30%'}/>
            <table className="grid-table-mgmt" style={{width: '40%'}}>
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
          </>
        );
      case 'actionNeeded':
        return (
          <>
            <SearchBar input_width={'80%'}/>
            <table className="grid-table-mgmt" style={{width: '90%'}}>
              <thead>
                <tr>
                <th>S.No.</th>
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
          className={`tabButton ${activeTab === 'inProgress' ? 'active' : ''}`}
          onClick={() => handleTabClick('inProgress')}
        >
          In Progress
        </button>
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
        <button className='home-button'><img className='home-img' src={require('../../images/home.png')} alt="Home"/>HOME</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default ManagementTabsPage;