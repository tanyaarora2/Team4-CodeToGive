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
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button
        type="submit"
        onClick={handleSearchSubmit}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
