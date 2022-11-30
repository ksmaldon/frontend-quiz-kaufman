import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuizBody from "../QuizBody"
import QuizGenerator from "../QuizGenerator"
import QuestionDisplay from "../QuestionDisplay"
import { allQuestions } from './mockData'

const mockedProps = {
  allQuestions: allQuestions,
  deleteQuestion: jest.fn(),
}

describe('tests QuizBody', () => {
  
  it('renders no questions by default (when no checkbox is clicked', () => {
    render(<QuizBody {...mockedProps} />)
    expect(screen.queryAllByText(/Question/i)).toHaveLength(0)
  })

  it('renders questions when a checkbox is clicked', () => {
    render(<QuizBody {...mockedProps} />)
    userEvent.click(screen.getByLabelText(/React/i));
    expect(screen.queryAllByText(/Question/i)).toHaveLength(4)
  })
  
  it('deletes quiz when delete button is click', () => {
    render(<QuizBody {...mockedProps}/>)
    userEvent.click(screen.getByLabelText(/React/i));
    const buttons = screen.getAllByRole('button', {name: 'Delete'})
    userEvent.click(buttons[0])
    expect(mockedProps.deleteQuestion).toHaveBeenCalled()
  })
  

})


// Set up a Jest mock function to check any props.
// const mockChildComponent = jest.fn();

// Mock the child component file, and grab all props passed to it
// and pass them to the Jest mock function so it can listen.


// jest.mock(QuizGenerator, () => (props) => {
//   mockChildComponent(props);

//   Return something for React to render. I like creating
//   an element to pass through as it
//   helps with visually debugging if needed.

  

//   return <mock-childComponent />;
// });


// test("If QuizBody is passed deletedQuestion and questions, questionDisplay is called with prop 'deleteQestion' and 'question", () => {
//     // Render the ParentComponent with the props wanting to
//     // be tested.


//     render(<QuestionDisplay  open data="some data" />);
  
//     // Check that the Jest mock function is called with an object.
//     // Use 'expect.objectContaining' to make sure any other default
//     // React props are ignored.
//     expect(mockChildComponent).toHaveBeenCalledWith(
//       expect.objectContaining({
//         open: true,
//         data: "some data",
//       })
//     );
//   });


// it('tests data passed down to QuizBody are in the document', () => {
//     const baseProps = {
//         questions: [
//             { question_id: 1, question: "which language?", answer: "js"},
//             { question_id: 2, question: "which library?", answer: "react"},
//             { question_id: 3, question: " HTML or css?", answer: "HTML"},
//            ],
//         deleteQuestion: jest.fn()
//     }
     
//        render(<QuizBody allQuestions={baseProps.questions} deleteQuestion= {baseProps.deleteQuestion}/>);
   
//     expect(deleteQuestion).toHaveBeenCalled();
//   });