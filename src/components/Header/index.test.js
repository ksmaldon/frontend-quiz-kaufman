import { render, screen } from '@testing-library/react';
import Header from "../Header"

it('should render same text passed into title prop', () => {
  render(<Header title= "My Quiz"/>);
  const titleElement = screen.getByText(/my quiz/i);
  expect(titleElement).toBeInTheDocument();
});

it('should contain an h1 element', () => {
    render(<Header title= "My Quiz"/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
