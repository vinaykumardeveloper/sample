import React from 'react';
import './WordMeaning.css';

const WordMeaning = ({ word, meaning, meaningInLang, language }) => {
  
  const speakMeaning = () => {
    if (meaning) {
      const utterance = new SpeechSynthesisUtterance(meaning);
      speechSynthesis.speak(utterance);
    }
  };

  if (!word) {
    return null;
  }

  return (
    <div className="meaning-container">
      {/* <h2 className="word-title">Word: {word}</h2> */}
      <div className="meaning-row">
        <p className="word-meaning">English Meaning: {meaning ? meaning : 'No meaning found'}</p>
        {meaning && (
          <button className="speaker-button" onClick={speakMeaning}>
            🔊
          </button>
        )}
      </div>
      {language !=='' &&(
        <p className="word-meaning-lang">Meaning in Selected Language: {meaningInLang ? meaningInLang : 'No meaning found'}</p>
      ) 
    }
      
      
    </div>
  );
};


export default WordMeaning;
