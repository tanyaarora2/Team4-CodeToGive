import React, { useState } from "react";
import "../Mgmt/SearchBar.css";
import "./DataSocial.css";
import "./SearchbarSocial.css";
const SearchBarSocial = () => {
  const data = [
    {
      sNo: "1",
      caseNumber: "BAL/6",
      childName: "Abc",
      age: 15,
      childClassification: "Abandoned",
    },
    {
      sNo: "2",
      caseNumber: "PAL",
      childName: "Efg",
      age: 10,
      childClassification: "Abandoned",
    },
    {
      sNo: "3",
      caseNumber: "CAL/23",
      childName: "Manu",
      age: 9,
      childClassification: "orphaned",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState(data);
  const [filterField, setFilterField] = useState("");
  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);
    const newData = data.filter((ele) => {
      const caseNumber = ele.caseNumber.toLowerCase();
      const childName = ele.childName.toLowerCase();
      return (
        caseNumber.includes(searchValue) || childName.includes(searchValue)
      );
    });
    setFilterData(newData);
  };
  const handleSort = () => {
    const sortedData = [...filterData];
    sortedData.sort((a, b) => {
      return a.age - b.age;
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
      filterField === "age" ? parseInt(filterValue) : filterValue.toLowerCase();
    const filteredData = data.filter((item) => {
      const value = item[filterField];

      if (filterField === "age") {
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
        <input
          style={{ width: "90%" }}
          className="search-bar-input"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <button className="sort-button" onClick={handleSort}>
          Sort
        </button>
        <div className="filter-dropdown">
          <select
            className="filter-field filter-button"
            value={filterField}
            onChange={handleFilterFieldChange}
          >
            <option value="">Select Field</option>
            <option value="caseNumber">Case Number</option>
            <option value="childName">Child Name</option>
            <option value="age">Age</option>
            <option value="childClassification">Child Classification</option>
          </select>
          <button className="filter-button" onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>
      <table className="social-table">
        <thead className="head-social">
          <tr>
            <th>S.NO.</th>
            <th>CASE NUMBER</th>
            <th>CHILD NAME</th>
            <th>AGE</th>
            <th>CHILD CLASSIFICATION</th>
            <th></th>
            {/* Add more table header columns as needed */}
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={index}>
              <td>{item.sNo}</td>
              <td>{item.caseNumber}</td>
              <td>{item.childName}</td>
              <td>{item.age}</td>
              <td>{item.childClassification}</td>
              <td>
                <button className="details-button">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchBarSocial;
