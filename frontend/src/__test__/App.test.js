import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders twelve-app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/twelve-app/i);
  expect(linkElement).toBeInTheDocument();
});
