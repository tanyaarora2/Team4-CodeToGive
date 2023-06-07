import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './ButtonStyles.css';
import './DataTable.css';

const ManagementTabsPage = () => {
  const [activeTab, setActiveTab] = useState('inProgress');
  const dataInProgress = [
    { column1: '1', column2: 'BAL/6', column3: 'ABC', column4: '10 years and 2 months', column5: 'Abandoned'},
    // Add more data as needed
  ];

  const dataActionNeeded = [
    { column1: '2', column2: 'BAL/73', column3: 'XYZ', column4: '11', column5: 'Surrendered'},
    // Add more data as needed
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const inProgressDetails = (index) => {
    console.log(`Button clicked for row ${index}`);
    // Perform any desired action here
  };

  const ActionNeededDetails = (index) => {
    console.log(`Button clicked for row ${index}`);
    // Perform any desired action here
  };

  const renderTableRowsinProgress = () => {
    return dataInProgress.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td><button className='details-btn' onClick={() => inProgressDetails(index)}>Details</button></td>
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
            <SearchBar />
            <table className="grid-table-mgmt">
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
              <tbody>{renderTableRowsinProgress()}</tbody>
            </table>
          </>
        );
      case 'toBeAssigned':
        return <div className="tabContent">To Be Assigned Content</div>;
      case 'actionNeeded':
        return (
          <>
            <SearchBar />
            <table className="grid-table-mgmt">
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
        );;
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