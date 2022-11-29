import { render, screen } from '@testing-library/react';
import Form from '../Form'

it('should have 3 input fields', () => {
  render(<Form/>);
  const inputElements = screen.getAllByRole('textbox');
  expect(inputElements.length).toBe(3);
});

it('should contains label text "Question"  ', () => {
    render(<Form/>);
    const labelText = screen.getByText('Question:');
    expect(labelText).toBeInTheDocument()
  });