import React, { useState, useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionBoxRef = useRef(null);

  const handleClickOutside = (event) => {
    // Close suggestions only if clicking outside the suggestion box
    if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
      setShowSuggestions(false); // Hide suggestions on search
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
    setShowSuggestions(true); // Show suggestions while typing
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <div onMouseDown={handleClickOutside}>
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

      {showSuggestions && suggestions.length > 0 && (
        <div 
          className='suggestions-box' 
          ref={suggestionBoxRef}
          onMouseDown={(e) => e.stopPropagation()} // Prevent closing when clicking inside the suggestion box
        >
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li 
                key={index} 
                onClick={() => handleSuggestionClick(suggestion)} 
                className="suggestion-item"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;






// import React, { useState,useRef  } from 'react';
// import './SearchBar.css';

// const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const suggestionBoxRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
//       setShowSuggestions(false);
//     }
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       onSearch(inputValue);
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     onInputChange(e.target.value);
//   };


//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion);
//     onSearch(suggestion);
//   };

//   return (
//     <div onMouseDown={handleClickOutside}>
//       <form onSubmit={handleSubmit} className="search-form">
//         <input
//           type="text"
//           placeholder="Enter a word"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="search-input"
//         />
//         <button type="submit" className="search-button">Search</button>
//       </form>
//       {showSuggestions && (
//       <div className='suggestions-box' ref={suggestionBoxRef}>
//         {/* Display suggestions as a dropdown */}
//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((suggestion, index) => (
//               <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>)}

//     </div>
//   );
// };

// export default SearchBar;