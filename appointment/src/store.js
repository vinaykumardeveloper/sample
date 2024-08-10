// src/store.js
import { createStore } from 'redux';

const initialState = {
  appointment: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_APPOINTMENT':
      return { ...state, appointment: action.payload };
    default:
      return state;
  }
};

const store = createStore(appointmentReducer);

export default store;