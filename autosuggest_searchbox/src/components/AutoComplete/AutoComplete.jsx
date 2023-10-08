import React, { useState } from "react";
import { data } from "../data";
import "./AutoComplete.css"; // Import a CSS file for styling

const AutoComplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const isSearchValuePresentInData = data.some((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="autocomplete-container">
      <h3 className="autocomplete-heading">Auto Search Box</h3>
      <div className="search-input-container">
        <input
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleSearch}
          className="search-input"
          placeholder="Search..."
        />
        {searchValue.length > 0 && (
          <span className="clear-button" onClick={() => setSearchValue("")}>
            &#x2715;
          </span>
        )}
      </div>
      {suggestions.length > 0 && searchValue.length > 0 ? (
        <div className="suggestion-container">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => {
                setSearchValue(item.name);
                setSuggestions("");
              }}>
              {item.name}
            </div>
          ))}
        </div>
      ) : isSearchValuePresentInData ? null : (
        <div className="no-results">No results found.</div>
      )}
    </div>
  );
};

export default AutoComplete;
