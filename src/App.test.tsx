import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers
import App from './App';
import React from 'react';

test('renders a "Hello, World!!!" heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, World!!!/i);
  expect(headingElement).toBeInTheDocument(); // Use the Jest DOM matcher
});
