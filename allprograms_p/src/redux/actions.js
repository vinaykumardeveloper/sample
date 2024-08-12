export const SET_OPERATION = 'SET_OPERATION';
export const SET_NUMBERS = 'SET_NUMBERS';

export const setOperation = (operation) => ({
    type: SET_OPERATION,
    payload: operation
});

export const setNumbers = (from, to) => ({
    type: SET_NUMBERS,
    payload: { from, to }
});