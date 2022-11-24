import { render, screen } from '@testing-library/react';
import QuestionCard from "../QuestionCard"

it('should render same text passed into question prop', () => {
  render(<QuestionCard question= "true or false"/>);
  const questionText = screen.getByText(/true or false/i);
  expect(questionText).toBeInTheDocument();
});

it('should render same text passed into answer prop', () => {
    render(<QuestionCard answer="false"/>);
    const answerText = screen.getByText(/false/i);
    expect(answerText).toBeInTheDocument();
  });