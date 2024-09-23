import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ onLanguageChange }) => {
  return (
    <div className="language-selector">
      <button onClick={() => onLanguageChange('te')}>Telugu</button>
      <button onClick={() => onLanguageChange('hi')}>Hindi</button>
      <button onClick={() => onLanguageChange('ta')}>Tamil</button>
      <button onClick={() => onLanguageChange('kn')}>Kannada</button>
    </div>
  );
};


export default LanguageSelector;
