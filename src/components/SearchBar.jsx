import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, suggestions }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // function for handling input user gives
  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // triggers live search
    setShowSuggestions(true);
  };


  // function for handling submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    onSearch(title);
    setShowSuggestions(false);
  };

  return (
    <div className="search-wrapper">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Show suggestion list only when there's input and suggestions available */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((title, index) => (
            <li key={index} onClick={() => handleSuggestionClick(title)}>
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
