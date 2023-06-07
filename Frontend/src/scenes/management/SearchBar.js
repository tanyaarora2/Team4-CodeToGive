import React from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ value, onChange, onSort, onFilter}) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      <button className="sort-button" onClick={onSort}>
        Sort
      </button>
      <button className="filter-button" onClick={onFilter}>
        Filter
      </button>
    </div>
  );
};

export default SearchBar;
