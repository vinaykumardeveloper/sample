// src/components/AppointmentConfirmation.js
import React from 'react';
import { useSelector } from 'react-redux';

const AppointmentConfirmation = () => {
  const appointment = useSelector((state) => state.appointment);

  if (!appointment) return null;

  return (
    <div className="confirmation">
      <h2>Appointment Confirmed</h2>
      <p>Your appointment is booked with the following details:</p>
      <p>Name: {appointment.name}</p>
      <p>Age: {appointment.age}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      <p>Thank you</p>
    </div>
  );
};

export default AppointmentConfirmation;
