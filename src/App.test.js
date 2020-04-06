import React from 'react';
import { render } from '@testing-library/react';
import JSApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<JSApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
