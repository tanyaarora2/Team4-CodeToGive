import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../Mgmt/SearchBar.css";
import "./DataTable.css";
import "./SearchBar.css";
import axios from 'axios';
import './ButtonStyles.css';
//import { dA } from "@fullcalendar/core/internal-common";


const SearchBar = ({ setSelectedCaseNumber }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setData(res.data);
        setFilterData(res.data)
      });
  }, []);


  const inProgressDetails = (item, index) => {
    console.log(`Button clicked for row ${index}`);
    // Fetch the case number
    const caseNumber = item.Case_Number;
    setSelectedCaseNumber(caseNumber);
    navigate('/EachCasePage');
  };
  const navigate = useNavigate();


  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState(data);
  // setFilterData(data);
  // const [filterData, setFilterData] = useState(data);
  const [filterField, setFilterField] = useState("");
  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);
    const newData = data.filter((ele) => {
      const caseNumber = ele.Case_Number.toLowerCase();
      const childName = ele.Child_Name.toLowerCase();
      return (
        caseNumber.includes(searchValue) || childName.includes(searchValue)
      );
    });
    setFilterData(newData);
  };
  const handleSort = () => {
    const sortedData = [...filterData];
    sortedData.sort((a, b) => {
      return b.Age - a.Age;
    });
    setFilterData(sortedData);
  };
  const handleFilterFieldChange = (event) => {
    setFilterField(event.target.value);
  };
  const handleFilter = () => {
    if (!filterField) {
      return; // No filter field selected, do nothing
    }

    let filterValue = prompt(`Enter ${filterField} value:`); // Prompt user for filter value

    if (!filterValue) {
      return; // No filter value entered, do nothing
    }
    filterValue =
      filterField === "Age" ? parseInt(filterValue) : filterValue.toLowerCase();
    const filteredData = filterData.filter((item) => {
      const value = item[filterField];

      if (filterField === "Age") {
        return value === filterValue;
      } else {
        return value.toLowerCase().includes(filterValue);
      }
    });
    setFilterData(filteredData);
  };
  return (
    <>
      <div className="search-bar-container">
        <input style={{ width: '65%' }}
          className="search-bar-input"
          type="text"
          placeholder="Search by Case Number or Child Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <button className="sort-button" onClick={handleSort}>
          Sort by Age        </button>
        <div className="filter-dropdown">
          <select
            className="filter-field filter-button"
            value={filterField}
            onChange={handleFilterFieldChange}
          >
            <option value="">Select Field</option>
            <option value="Case_Number">Case Number</option>
            <option value="Child_Name">Child Name</option>
            <option value="Age">Age</option>
            <option value="Child_Classification">Child Classification</option>
          </select>
          <button className="filter-button" onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>
      <table className="grid-table-mgmt">
        <thead >
          <tr>
            <th>CASE NUMBER</th>
            <th>CHILD NAME</th>
            <th>CHILD CLASSIFICATION</th>
            <th>AGE</th>
            <th>CURRENT PROGRESS</th>

            <th></th>
            {/* Add more table header columns as needed */}
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={index}>
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Case_Number}</td>}
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Name}</td>}
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Child_Classification}</td>}
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Age}</td>}
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td>{item.Progress}</td>}
              {item.Assigned_To === 'None' && item.Action === Boolean(false) && <td><button className='details-btn' onClick={() => inProgressDetails(item, index)}>Details</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchBar;
