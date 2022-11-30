import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import QuestionCard from "../QuestionCard"

describe('tests QuestionCard', () => {

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

    it('show anwer when reveal button is clicked', () => {
      render(<QuestionCard/>)
      const buttons = screen.getAllByRole('button', {name: 'Reveal Answer'})
      userEvent.click(buttons[0])
      const hideButton = screen.getByText(/Hide Answer/)
      expect(hideButton).toBeInTheDocument()

    })

})


