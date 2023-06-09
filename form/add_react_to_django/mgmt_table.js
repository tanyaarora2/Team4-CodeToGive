import SearchBar from './SearchBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ButtonStyles.css';
import './DataTable.css';

const ManagementTabsPage = () => {
    const [activeTab, setActiveTab] = useState('inProgress');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000')
            .then(res => {
                setData(res.data);
            });
    }, []);

    // const dataActionNeeded = [
    //     { column1: '2', column2: 'BAL/73', column3: 'XYZ', column4: '11', column5: 'Surrendered' },
    //     // Add more data as needed - fetch data from backend
    // ];

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
        return (
            <>
                <table className='grid-table'>
                    <thead>
                        <tr>
                            <th>Case Number</th>
                            <th>Child_Name</th>
                            <th>Child_Classification</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Case_Number}</td>}
                                {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Name}</td>}
                                {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Classification}</td>}
                                {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Age}</td>}
                                {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td><button className='details-btn' onClick={() => inProgressDetails(index)}>Details</button></td>}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    };

    const renderTableRowsActionNeeded = () => {
        return (
            <>
                <table className='grid-table'>
                    <thead>
                        <tr>
                            <th>Case Number</th>
                            <th>Child_Name</th>
                            <th>Child_Classification</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                {item.Action === Boolean(true) && <td>{item.Case_Number}</td>}
                                {item.Action === Boolean(true) && <td>{item.Child_Name}</td>}
                                {item.Action === Boolean(true) && <td>{item.Child_Classification}</td>}
                                {item.Action === Boolean(true) && <td>{item.Age}</td>}
                                {item.Action === Boolean(true) && <td><button className='details-btn' onClick={() => inProgressDetails(index)}>Details</button></td>}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'inProgress':
                return (
                    <>
                        <SearchBar />
                        {renderTableRowsinProgress()}
                    </>
                );
            case 'toBeAssigned':
                return <div className="tabContent">To Be Assigned Content</div>;
            case 'actionNeeded':
                return (
                    <>
                        <SearchBar />
                        {renderTableRowsActionNeeded()}
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
                <button className='home-button'><img className='home-img' src={require('./home.png')} alt="Home" />HOME</button>
            </div>
            <div>{renderContent()}</div>
        </div>
    );
};

export default ManagementTabsPage;