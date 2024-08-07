export const START_APP = 'START_APP';
export const SET_ALPHABET = 'SET_ALPHABET';
export const NEXT_ALPHABET = 'NEXT_ALPHABET';
export const PREVIOUS_ALPHABET = 'PREVIOUS_ALPHABET';
export const SHOW_WORD = 'SHOW_WORD';

export const startApp = () => ({ type: START_APP });
export const setAlphabet = (index) => ({ type: SET_ALPHABET, index });
export const nextAlphabet = () => ({ type: NEXT_ALPHABET });
export const previousAlphabet = () => ({ type: PREVIOUS_ALPHABET });
export const showWord = () => ({ type: SHOW_WORD });

