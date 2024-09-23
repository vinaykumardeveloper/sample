import React from "react";
import "./SetDefaultLanguage.css";

const SetDefaultLanguage = ({ onLanguageChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onLanguageChange(selectedValue);
  };

  return (
    <div>
      <select id="options" name="options" onChange={handleChange}>
        <option value="" disabled selected>
          Set Default Language
        </option>
        <option value="te">Telugu</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="kn">Kannada</option>
      </select>
    </div>
  );
};


export default SetDefaultLanguage;
