// src/App.js
import React, { useState } from 'react';
import './App.css';  // Import the CSS file
import AppointmentForm from './AppointmentForm';
import AppointmentConfirmation from './AppointmentConfirmation';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <h1>Appointment Booking System</h1>
      {!showForm && <button onClick={() => setShowForm(true)}>Book Appointment</button>}
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
      <AppointmentConfirmation />
    </div>
  );
};

export default App;
