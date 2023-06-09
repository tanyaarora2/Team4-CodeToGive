import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css';
import Abandoned from './abandoned';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

const App = () => {
    const [isAbandonedClicked, setIsAbandonedClicked] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000')
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleAbandonedClick = () => {
        setIsAbandonedClicked(true);
    };

    return (
        <>
            <div>
                <button onClick={handleAbandonedClick}>Abandoned</button>
                {isAbandonedClicked ? (
                    <Abandoned />
                ) : (
                    <table className='grid-table'>
                        <thead>
                            <tr>
                                <th>Case Number</th>
                                <th>State</th>
                                <th>District</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Case_Number}</td>
                                    <td>{item.Child_Name}</td>
                                    <td>{item.State}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default App;
