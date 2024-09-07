import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WordMeaning from './components/WordMeaning';
import LanguageSelector from './components/LanguageSelector';
import ImageGallery from './components/ImageGallery';
import './App.css';

const App = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState(null);
  const [meaningInLang, setMeaningInLang] = useState(null);
  const [language, setLanguage] = useState('te'); // Default to Telugu
  const [suggestions, setSuggestions] = useState([]);
  const [images, setImages] = useState([]);

  const fetchWordMeaning = async (searchWord) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      const data = await response.json();
      if (data[0] && data[0].meanings) {
        const englishMeaning = data[0].meanings[0].definitions[0].definition;
        setMeaning(englishMeaning);
        translateToLanguage(englishMeaning, language);
        fetchImages(englishMeaning);
      } else {
        setMeaning('No definition found');
        setMeaningInLang('No definition found');
        setImages([]);
      }
    } catch (error) {
      setMeaning('Error fetching the meaning');
      setMeaningInLang('Error fetching the meaning');
      setImages([]);
    }
  };

  const translateToLanguage = async (englishMeaning, langCode) => {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishMeaning)}&langpair=en|${langCode}`);
      const data = await response.json();
      setMeaningInLang(data.responseData.translatedText);
    } catch (error) {
      setMeaningInLang('Error translating the meaning');
    }
  };

  const fetchImages = async (query) => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`, {
        headers: {
          Authorization: 'GogdJgkRC1K5ysgow5lyI4jqmPIRwMhcz3BZ4DPJXaIJ5rMUsEA1kG1S' // Replace with your actual Pexels API key
        }
      });
      const data = await response.json();
      setImages(data.photos.map(photo => photo.src.small));
    } catch (error) {
      setImages([]);
    }
  };
  const fetchSuggestions = async (inputWord) => {
    try {
      const response = await fetch(`https://api.datamuse.com/sug?s=${inputWord}`);
      const data = await response.json();
      setSuggestions(data.map(suggestion => suggestion.word));
    } catch (error) {
      setSuggestions([]);
    }
  };

  const handleSearch = (searchWord) => {
    setWord(searchWord);
    setSuggestions([]);
    fetchWordMeaning(searchWord);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    if (meaning) {
      translateToLanguage(meaning, langCode);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Dictionary App</h1>
      <SearchBar onSearch={handleSearch} onInputChange={fetchSuggestions} suggestions={suggestions} />
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <WordMeaning word={word} meaning={meaning} meaningInLang={meaningInLang} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;

