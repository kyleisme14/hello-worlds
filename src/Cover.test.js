import { render, screen } from '@testing-library/react';
import Cover from './Cover';

test('renders image', () => {
  render(<Cover />);
  const linkElement = screen.getByTitle(/image55/i);
  expect(linkElement).toBeInTheDocument();
});

