import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import SearchBar from "./components/SearchBar";
import WordMeaning from "./components/WordMeaning";
import LanguageSelector from "./components/LanguageSelector";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
import SetDefaultLanguage from "./components/SetDefaultLanguage";

const App = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [meaningInLang, setMeaningInLang] = useState(null);
  const [language, setLanguage] = useState(''); // Default to Telugu
  const [suggestions, setSuggestions] = useState([]);
  const [images, setImages] = useState([]);





  // Fetch word meaning
  const fetchWordMeaning = async (searchWord) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      if (response.data[0] && response.data[0].meanings) {
        console.log(
          "chaeking response1234:",
          JSON.stringify(response.data[0].meanings[0].definitions[0].definition)
        );
        const englishMeaning =
          response.data[0].meanings[0].definitions[0].definition;
        setMeaning(englishMeaning);
        translateToLanguage(englishMeaning, language);
        fetchImages(englishMeaning);
        setLanguage("");
      } else {
        setMeaning("No definition found");
        setMeaningInLang("No definition found");
        setImages([]);
      }
    } catch (error) {
      setMeaning("Error fetching the meaning");
      setMeaningInLang("Error fetching the meaning");
      setImages([]);
    }
  };

  // Translate meaning to selected language
  const translateToLanguage = async (englishMeaning, language) => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get`,
        {
          params: {
            q: englishMeaning,
            langpair: `en|${language}`,
          },
        }
      );
      setMeaningInLang(response.data.responseData.translatedText);
    } catch (error) {
      setMeaningInLang("Error translating the meaning");
    }
  };

  // Fetch images based on the word meaning
  const fetchImages = async (query) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization:
            "GogdJgkRC1K5ysgow5lyI4jqmPIRwMhcz3BZ4DPJXaIJ5rMUsEA1kG1S", // Replace with your actual Pexels API key
        },
        params: {
          query,
          per_page: 15,
        },
      });
      setImages(response.data.photos.map((photo) => photo.src.small));
    } catch (error) {
      setImages([]);
    }
  };

  // Fetch word suggestions
  const fetchSuggestions = async (inputWord) => {
    try {
      const response = await axios.get(`https://api.datamuse.com/sug`, {
        params: { s: inputWord },
      });
      setSuggestions(response.data.map((suggestion) => suggestion.word));
    } catch (error) {
      setSuggestions([]);
    }
  };

  const handleSearch = (searchWord) => {
    setWord(searchWord);
    setSuggestions([]);
    fetchWordMeaning(searchWord);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    if (meaning) {
      translateToLanguage(meaning, language);
    }
  };

  // const handleDefaultLanguageChange = (language) => {
  //   setLanguage(language);
  //   if (meaning) {
  //     translateToLanguage(meaning, language);
  //   }
  // };

  return (
    <div className="app-container">
      <h1 className="app-title">Dictionary App</h1>

      <SetDefaultLanguage onLanguageChange={handleLanguageChange} />

      <SearchBar
        onSearch={handleSearch}
        onInputChange={fetchSuggestions}
        suggestions={suggestions}
      />

      <LanguageSelector onLanguageChange={handleLanguageChange} />

      <WordMeaning
        word={word}
        meaning={meaning}
        meaningInLang={meaningInLang}
        language={language}
      />

      <ImageGallery images={images} />
    </div>
  );
};

export default App;