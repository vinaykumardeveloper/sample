import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter a word"
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    <div className='suggestions-box'>
      {/* Display suggestions as a dropdown */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default SearchBar;
