import { render, screen } from '@testing-library/react';
import Form from '../Form'

it('should have 3 input fields', () => {
  render(<Form/>);
  const inputElements = screen.getAllByRole('textbox');
  expect(inputElements.length).toBe(3);
});

it('should contains label text "Answer"  ', () => {
    render(<Form/>);
    const labelText = screen.getByLabelText('Answer:');
    expect(labelText).toBeInTheDocument()
  });