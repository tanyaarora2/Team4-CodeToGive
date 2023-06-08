import React, { useState } from "react";
import "./SearchbarSocial.css";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <button className="sort-button">Sort</button>
      <button className="filter-button">Filter</button>
    </div>
  );
};

export default SearchBar;
