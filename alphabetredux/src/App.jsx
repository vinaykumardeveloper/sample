import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startApp, showWord, nextAlphabet, previousAlphabet } from './store/actions';
import AlphabetButton from './components/AlphabetButton';
import NavigationButtons from './components/NavigationButtons';
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
  I: 'IGLOO',
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
  const currentStep = useSelector(state => state.currentStep);
  const currentIndex = useSelector(state => state.currentIndex);
  const dispatch = useDispatch();

  const startHandler = () => {
    dispatch(startApp());
  };

  const alphabetClickHandler = () => {
    dispatch(showWord());
  };

  const nextHandler = () => {
    dispatch(nextAlphabet());
  };

  const prevHandler = () => {
    dispatch(previousAlphabet());
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
          <NavigationButtons onNext={nextHandler} onPrev={prevHandler} />
        </div>
      )}

      {currentStep !== 'start' && currentStep !== 'word' && (
        <NavigationButtons onNext={nextHandler} onPrev={prevHandler} />
      )}
    </div>
  );
};

export default App;
