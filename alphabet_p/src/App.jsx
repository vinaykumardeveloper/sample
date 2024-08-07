import React, {useState} from 'react';
import AlphabetButton from './AlphabetButton';
import NavigationButtons from './NavigationButtons';
import './App.css';

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const words = {
  A: 'APPLE',
  B: 'BALL',
  C: 'CAT',
  D: 'DOG',
  E: 'ELEPHANT',
  F: 'FROG',
  G: 'GRAPE',
  H: 'HORSE',
  I: 'INK',
  J: 'JELLYFISH',
  K: 'KITE',
  L: 'LION',
  M: 'MONKEY',
  N: 'NEST',
  O: 'ORANGE',
  P: 'PENGUIN',
  Q: 'QUEEN',
  R: 'RABBIT',
  S: 'SNAKE',
  T: 'TIGER',
  U: 'UMBRELLA',
  V: 'VIOLIN',
  W: 'WHALE',
  X: 'XYLOPHONE',
  Y: 'YACHT',
  Z: 'ZEBRA'
};

const App = () => {
  const [currentStep, setCurrentStep] = useState('start');
  const [currentIndex, setCurrentIndex] = useState(0);

  const startHandler = () => {
    setCurrentStep('alphabet');
  };

  const alphabetClickHandler = () => {
    setCurrentStep('word');
  };

  const nextHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabets.length);
    setCurrentStep('alphabet');
  };

  const prevHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + alphabets.length) % alphabets.length);
    setCurrentStep('alphabet');
  };

  return (
    <div className="App">
      {currentStep === 'start' && <button onClick={startHandler}>Start</button>}
      {currentStep === 'alphabet' && (
        <AlphabetButton
          letter={alphabets[currentIndex]}
          onClick={alphabetClickHandler}
        />
      )}
      {currentStep === 'word' && (
        <div>
          <h1>{words[alphabets[currentIndex]]}</h1>
          <NavigationButtons onNext={nextHandler} onPrev={prevHandler}/>
        </div>
      )}
      {currentStep !== 'start' && currentStep !== 'word' &&  (
        <NavigationButtons onNext={nextHandler} onPrev={prevHandler}/>
      )}



    </div>
  );
};

export default App;
