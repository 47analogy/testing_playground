import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [apptText, setApptText] = useState('');

  const handleTextChange = (e) => {
    setApptText(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(apptText);
    setApptText('');
  };

  return (
    <div>
      <input
        data-testid="messageText"
        type="text"
        value={apptText}
        onChange={handleTextChange}
      />
      <button data-testid="submitButton" onClick={handleSubmit}>
        Send Msg
      </button>
    </div>
  );
};

export default AppointmentForm;
