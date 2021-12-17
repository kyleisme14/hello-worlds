import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

test('render email tag', ()=> {
  render(<Contact/>);
  const spanElement = screen.getByText(/Email/i);
  expect(spanElement).toBeInTheDocument();
});
test('render Send message', ()=> {
  render(<Contact/>);
  const spanElement = screen.getByText(/Send Message/i);
  expect(spanElement).toBeInTheDocument();
});
test('render name', ()=> {
  render(<Contact/>);
  const spanElement = screen.getByText(/Name/i);
  expect(spanElement).toBeInTheDocument();
});
test('render name input', ()=> {
  render(<Contact/>);
  const spanElement = screen.getByTitle(/NameInput/i);
  expect(spanElement).toBeInTheDocument();
});
test('render email input', ()=> {
  render(<Contact/>);
  const spanElement = screen.getByTitle(/EmailInput/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders button', () => {
  render(<Contact />);
  const spanElement = screen.getByTitle(/but1/i);
  expect(spanElement).toBeInTheDocument();
});	
test('renders facebook button', () => {
  render(<Contact />);
  const spanElement = screen.getByTitle(/facebook/i);
  expect(spanElement).toBeInTheDocument();
});	
test('renders instagram button', () => {
  render(<Contact />);
  const spanElement = screen.getByTitle(/instagram/i);
  expect(spanElement).toBeInTheDocument();
});	
test('renders twitter button', () => {
  render(<Contact />);
  const spanElement = screen.getByTitle(/twitter/i);
  expect(spanElement).toBeInTheDocument();
});	