import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const suggestionsRef = useRef(null);

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

  // Handle clicks outside of the suggestions box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        // Clear suggestions if clicked outside the list
        onInputChange('');  
      }
    };

    // Add event listener for clicks
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onInputChange]);

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
          <ul ref={suggestionsRef} className="suggestions-list">
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




// import React, { useState, useEffect, useRef } from 'react';
// import './SearchBar.css';

// const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
//   const [inputValue, setInputValue] = useState('');
//   const suggestionsRef = useRef(null);

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

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
//         // Clear suggestions if clicked outside the list
//         onInputChange('');  
//       }
//     };
  

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [suggestionsRef, onInputChange]);

//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion);
//     onSearch(suggestion);
//   };

//   return (
//     <div>
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
//     <div className='suggestions-box'>
//       {/* Display suggestions as a dropdown */}
      
//       {suggestions.length > 0 && (
//         <ul ref={suggestionsRef} className="suggestions-list">
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



// import React, { useState, useEffect, useRef } from 'react';
// import './SearchBar.css';

// const SearchBar = ({ onSearch, onInputChange, suggestions }) => {
//   const [inputValue, setInputValue] = useState('');
//   const suggestionsRef = useRef(null);  // Reference for suggestions list

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     onInputChange(value);  // Pass the input value to parent for suggestions
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       onSearch(inputValue);
//     }
//   };

//   // Handle click outside of the suggestions list
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
//         // Clear suggestions if clicked outside the list
//         onInputChange('');  
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     // Cleanup event listener on component unmount
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [suggestionsRef, onInputChange]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className='search-form'>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Search for a word"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div className='suggestions-box'>
//       {suggestions.length > 0 && (
//         <ul ref={suggestionsRef} className="suggestions-list">
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => onSearch(suggestion)} className="suggestions-list">
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

