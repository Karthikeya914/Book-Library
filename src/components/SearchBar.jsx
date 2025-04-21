// src/components/SearchBar.jsx
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, suggestions }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // live search
    setShowSuggestions(true);
  };

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
