import { render, screen } from '@testing-library/react';
import Cover from './Cover';

test('renders super scaffolding', () => {
  render(<Cover />);
  const linkElement = screen.getByText(/super scaffolding/i);
  expect(linkElement).toBeInTheDocument();
});

test('render happy holiday', ()=> {
  render(<Cover/>);
  const spanElement = screen.getByText(/happy holiday/i);
  expect(spanElement).toBeInTheDocument();
});
test('picture present', ()=> {
  render(<Cover/>);
  const spanElement = screen.getByTitle(/image1/i);
  expect(spanElement).toBeInTheDocument();
});
