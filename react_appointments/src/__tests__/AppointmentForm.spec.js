import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import AppointmentForm from '../components/AppointmentForm';

describe('<AppointmentForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the submit button', () => {
    let submitHandler;

    beforeEach(() => {
      submitHandler = jest.fn();

      ({ getByTestId } = render(<AppointmentForm onSubmit={submitHandler} />));

      fireEvent.change(getByTestId('messageText'), {
        target: {
          value: 'New message',
        },
      });

      fireEvent.click(getByTestId('submitButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });

    it('calls the submit handler', () => {
      expect(submitHandler).toHaveBeenCalledWith('New message');
    });
  });
});
