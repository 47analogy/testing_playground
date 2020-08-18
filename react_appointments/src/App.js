import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  const handleSubmit = (newApptMessage) => {};

  return (
    <div className="App">
      <AppointmentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default hot(module)(App);
