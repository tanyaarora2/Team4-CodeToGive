import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './ButtonStyles.css';
import './DataTable.css';

const CompletedCases = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  
  const dataCompleted = [
    { column1: '1', column2: 'BAL/6', column3: 'ABC', column4: '10 years and 2 months', column5: 'Abandoned'},
    { column1: '1', column2: 'BAL/6', column3: 'ABC', column4: '10 years and 2 months', column5: 'Abandoned'},
    { column1: '1', column2: 'BAL/6', column3: 'ABC', column4: '10 years and 2 months', column5: 'Abandoned'},
    // Add more data as needed
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const CompletedDetails = (index) => {
    console.log(`Button clicked for row ${index}`);
    // Perform any desired action here
  };

  const renderTableRowsCompleted = () => {
    return dataCompleted.map((item, index) => (
      <tr key={index}>
        <td>{item.column1}</td>
        <td>{item.column2}</td>
        <td>{item.column3}</td>
        <td>{item.column4}</td>
        <td>{item.column5}</td>
        <td><button className='details-btn' onClick={() => CompletedDetails(index)}>Details</button></td>
      </tr>
    ));
  };


  const renderContent = () => {
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
        <button style={{marginLeft: '70%'}} className='home-button'><img className='home-img' src={require('../../images/home.png')} alt="Home"/>HOME</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default CompletedCases;