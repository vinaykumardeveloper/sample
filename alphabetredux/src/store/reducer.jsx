import { START_APP, SET_ALPHABET, NEXT_ALPHABET, PREVIOUS_ALPHABET, SHOW_WORD } from './actions';

const initialState = {
  currentStep: 'start',
  currentIndex: 0,
};

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, currentStep: 'alphabet' };
    case SET_ALPHABET:
      return { ...state, currentIndex: action.index, currentStep: 'alphabet' };
    case NEXT_ALPHABET:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % alphabets.length,
        currentStep: 'alphabet',
      };
    case PREVIOUS_ALPHABET:
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + alphabets.length) % alphabets.length,
        currentStep: 'alphabet',
      };
    case SHOW_WORD:
      return { ...state, currentStep: 'word' };
    default:
      return state;
  }
};

export default reducer;
